import {Box, Text, LinkBox, LinkOverlay} from "@chakra-ui/react"
import Image from 'next/image'
import React from "react";
import NextLink from "next/link"
import {Global} from "@emotion/react";

export const GridItem: React.FC<{ href: string, title: string, imgSrc: StaticImageData }> = (props) => {
   const {imgSrc, children, title, href} = props

   return (
      <Box w={'100%'} align={'center'}>

         <LinkBox cursor="pointer">
            <Image
               alt={title}
               loading={'lazy'}
               placeholder={'blur'}
               src={imgSrc}
               className={'grid-item-image'}/>
            <LinkOverlay href={href} target="_blank">
               <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={15}>{children}</Text>
         </LinkBox>
      </Box>
   )
}

export const WorkGridItem: React.FC<{ id: string, title: string, imgSrc: StaticImageData }> = (props) => {
   const {imgSrc, children, title, id} = props

   return (
      <Box w={'100%'} align={'center'}>
         <NextLink href={`/works/${id}`}>
            <LinkBox cursor={'pointer'}>
               <Image
                  alt={title}
                  placeholder={'blur'}
                  src={imgSrc}
                  className={'grid-item-image'}/>
               <LinkOverlay href={`/works/${id}`}>
                  <Text mt={2} fontSize={20} fontWeight={600}>{title}</Text>
               </LinkOverlay>
               <Text fontSize={18}>{children}</Text>
            </LinkBox>
         </NextLink>
      </Box>
   )
}


export const GridItemStyle = () => (
   <Global styles={`
      .grid-item-image{
      border-radius: 12px;
      }
   `}/>
)