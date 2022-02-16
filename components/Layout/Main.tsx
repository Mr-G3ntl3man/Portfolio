import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import React from "react";
import {NextRouter} from "next/router";
import {Navbar} from "../common/Navbar";
import Typewriter from "typewriter-effect";
import {SliderGif} from "../common/SliderGif";

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
               pt={'60px'}
               mH={200}>
               <Box fontSize={{base: '50px', sm: '60px'}} w={'100%'} fontFamily={'\'VT323\', monospace'}>
                  <SliderGif/>

                  <Box mt={4}>
                     <Typewriter
                        options={{
                           strings: ['Development', 'Front-end', 'JavaScript', 'React'],
                           autoStart: true,
                           loop: true,
                        }}/>
                  </Box>
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