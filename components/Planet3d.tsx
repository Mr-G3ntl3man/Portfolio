import {useEffect, useState, useRef, useCallback} from 'react'
import {Box, Spinner} from '@chakra-ui/react'
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {loadModel} from "../lib/model";
import {OrthographicCamera, WebGLRenderer} from "three";


const easeOutCirc = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 4))

export const Planet3D = () => {
   const ref = useRef<HTMLDivElement>(null)
   const [loading, setLoading] = useState<boolean>(true)
   const [renderer, setRenderer] = useState<WebGLRenderer>()
   const [_camera, setCamera] = useState<OrthographicCamera>()
   const [target] = useState(new THREE.Vector3(-0.5, -0.5, 0))
   const [scene] = useState(new THREE.Scene())
   const [_controls, setControls] = useState<OrbitControls>()
   const [initialCameraPosition] = useState(
      new THREE.Vector3(
         20 * Math.sin(0.2 * Math.PI),
         10,
         20 * Math.cos(0.2 * Math.PI)
      ))


   useEffect(() => {
      const {current} = ref

      if (current && !renderer) {
         const scW = current.clientWidth
         const scH = current.clientHeight

         const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
         })

         renderer.setPixelRatio(window.devicePixelRatio)
         renderer.setSize(scW, scH)
         renderer.outputEncoding = THREE.sRGBEncoding

         current.appendChild(renderer.domElement)

         setRenderer(renderer)

         const scale = scH * 0.005 / 1.2
         const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 5000)

         camera.position.copy(initialCameraPosition)
         camera.lookAt(target)
         setCamera(camera)

         const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
         scene.add(ambientLight)

         const controls = new OrbitControls(camera, renderer.domElement)
         controls.autoRotate = true
         controls.target = target
         setControls(controls)

         loadModel(scene, '/images/model/scene.gltf', {
            receiveShadow: false,
            castShadow: false
         }).then(() => {
            animate()
            setLoading(false)
         })

         let req: number

         let frame = 0
         const animate = () => {
            req = requestAnimationFrame(animate)

            frame = frame <= 100 ? frame + 1 : frame

            if (frame <= 100) {
               const p = initialCameraPosition
               const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

               camera.position.y = 5
               camera.position.x =
                  p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
               camera.position.z =
                  p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
               camera.lookAt(target)
            } else {
               controls.update()
            }

            renderer.render(scene, camera)
         }

         return () => {
            console.log('unmount')
            cancelAnimationFrame(req)
            renderer.dispose()
         }

      }
   }, [])

   const spinner = loading &&
      <Spinner
         ml={'calc(0px - var(--spinner-size / 2))'}
         mt={'calc(0px - var(--spinner-size))'}
         position={'absolute'}
         left={'50%'}
         top={'50%'}
         transform={'translateY(-50%)'}
         size={'md'}/>

   return (
      <Box
         ref={ref}
         className={'3dModel'}
         m={'auto'}
         at={['-20px', '-60px', '-120px']}
         mb={['-40px', '-140px', '-200px']}
         w={[280, 480, 640]}
         h={[280, 480, 540]}
         position="relative"
      >
         {spinner}

      </Box>
   )

}


