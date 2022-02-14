import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import React from "react";
import {NextRouter} from "next/router";
import {Navbar} from "../Navbar/Navbar";
import {Planet3D} from "../Planet3d";
import NoSsr from "../no-ssr";
import {Particle} from "../Additions/Particles";
import Typewriter from "typewriter-effect";
import {Slider} from "../Additions/SliderPortfolio";


const Main: React.FC<{ router: NextRouter }> = (props) => {
   const {router, children} = props

   return (
      <Box as={'main'} pb={8}>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Arthur Pashchuk - Portfolio</title>
         </Head>

         <Navbar path={router.asPath}/>

         <Container maxW={'container.md'}>
            <Box
               display='flex'
               justify='center'
               alignItems='center'
               align={'center'}
               m={'auto'}
               pt={20}
               w={[280, 480, 640]}
               mH={200}>
               <Box fontSize={{base: '50px', sm: '60px'}} w={'100%'} fontFamily={'\'VT323\', monospace'}>
                  {/*<Typewriter*/}
                  {/*   options={{*/}
                  {/*      strings: ['Perspective', 'Front-end', 'Developer'],*/}
                  {/*      autoStart: true,*/}
                  {/*      loop: true,*/}
                  {/*   }}/>*/}
                  {/*<Slider/>*/}
               </Box>
            </Box>

            {children}

            <Box align="center" opacity={0.4} fontSize="sm" mt={2}>
               &copy; {new Date().getFullYear()} Mr.G3ntl3man. All rights reserved.
            </Box>
         </Container>
      </Box>
   )
}

export default Main