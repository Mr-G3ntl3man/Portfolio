import type {AppProps} from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import Main from "../components/Layout/Main";
import {theme} from "../lib/theme";
import {Fonts} from "../components/Font/Fonts";
import {AnimatePresence} from 'framer-motion'
import React from "react";
import './../styles/globals.css'

const App = ({Component, pageProps, router}: AppProps) => {
   return (
      <ChakraProvider theme={theme}>
         <Fonts/>
         <Main router={router}>
            <AnimatePresence exitBeforeEnter initial={true}>
               <Component {...pageProps} key={router.route}/>
            </AnimatePresence>
         </Main>
      </ChakraProvider>
   )
}

export default App
