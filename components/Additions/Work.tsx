import {Image, Box, Link, Heading, Badge} from '@chakra-ui/react';
import NextLink from "next/link"
import React from 'react';
import {ChevronRightIcon} from "@chakra-ui/icons";

export const Title: React.FC = ({children}) => (
   <Box>
      <NextLink href={'/works'}>
         <Link>
            Works
         </Link>
      </NextLink>
      <span>
         &nbsp;
         <ChevronRightIcon/>
         &nbsp;
      </span>
      <Heading display={'inline-block'} as={'h3'} fontSize={'20'} mb={4}>{children}</Heading>
   </Box>
)

export const WorkImage: React.FC<{ src: string, alt: string }> = ({src, alt}) => (
   <Image my={5} borderRadius={'lg'} w={'full'} src={src} alt={alt}/>
)

export const WorkInfo: React.FC = ({children}) => (
   <Badge colorScheme={'teal'} mr={2}>
      {children}
   </Badge>
)