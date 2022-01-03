import React, {useEffect, useState} from 'react';
import {Badge, Flex, Progress, useColorModeValue} from "@chakra-ui/react";

export const Skill: React.FC<{ skill: string, progressValue: number }> = ({skill, progressValue}) => {
   const [progress, setProgress] = useState<number>(0);

   useEffect(() => {
      setTimeout(() => {
         const timer = setInterval(() => {
            setProgress((prevProgress) => {
               if (prevProgress >= 100) {
                  clearInterval(timer)
                  return prevProgress
               } else {
                  return prevProgress + 1
               }
            });
         }, 10)
      }, 900)
   }, [])

   return (
      <Flex my={2}>
         <Badge textAlign={'center'} minW={{base: '90px', sm: '120px'}} fontSize={{base: 14, sm: 16}}
                colorScheme={useColorModeValue('telegram', 'green')} mr={2}>
            {skill}
         </Badge>
         <Progress borderRadius={3} w={'100%'} colorScheme={useColorModeValue('telegram', 'green')} my={2}
                   value={progress < progressValue ? progress : progressValue}/>
      </Flex>
   )
}

