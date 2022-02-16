import {motion} from 'framer-motion'
import Head from 'next/head'
import React from "react";
import {GridItemStyle} from "../common/Grid-item";

const variants = {
   hidden: {opacity: 0, x: 0, y: 20},
   enter: {opacity: 1, x: 0, y: 0},
   exit: {opacity: 0, x: 0, y: 20},
}

export const Layout: React.FC<{ title?: string }> = ({title, children}) => (
   <motion.article
      style={{position: 'relative'}}
      initial={'hidden'}
      animate={'enter'}
      exit={'exit'}
      variants={variants}
      transition={{duration: 0.4, type: 'easeInOut'}}>
      <>
         {title && <Head><title>{title} - Arthur Pashchuk</title></Head>}
         {children}
         <GridItemStyle/>
      </>
   </motion.article>
)