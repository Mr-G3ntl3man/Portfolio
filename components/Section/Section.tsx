import {motion} from 'framer-motion'
import {chakra, shouldForwardProp} from "@chakra-ui/react";
import React from "react";

const StyleDiv = chakra(motion.div, {
   shouldForwardProp: props => shouldForwardProp(props) || props === 'transition'
})


export const Section: React.FC<{ delay: string }> = ({delay = '0', children}) => (
   <StyleDiv
      initial={{y: 10, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: '0.8', delay}}
      py={3}>
      {children}
   </StyleDiv>
)