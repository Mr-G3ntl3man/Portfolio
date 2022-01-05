import {useColorModeValue} from "@chakra-ui/react";
import {AnimatePresence, motion} from "framer-motion";
import React from "react";

export const AnimateTransition: React.FC = ({children}) => {

   return (
      <motion.div
         initial={{scale: 0}}
         animate={{scale: 1}}
         exit={{scale: 0}}
         transition={{duration: 0.2}}>
         {children}
      </motion.div>
   )
}