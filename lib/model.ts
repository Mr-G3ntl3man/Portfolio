import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export const loadModel = (
   scene: THREE.Scene,
   glbPath: string,
   options = {
      receiveShadow: true,
      castShadow: true
   }
) => {
   const {castShadow, receiveShadow} = options

   return new Promise((res, rej) => {
      const loader = new GLTFLoader()

      loader.load(
         glbPath,
         gltf => {
            const obj = gltf.scene
            obj.name = 'planet'
            obj.position.y = 0
            obj.position.x = 0
            obj.receiveShadow = receiveShadow
            obj.castShadow = castShadow

            scene.add(obj)

            obj.traverse((child) => {
               if (child.isObject3D) {
                  child.castShadow = castShadow
                  child.receiveShadow = receiveShadow
               }
            })

            res(obj)
         },
         undefined,
         (error) => rej(error)
      )
   })
}