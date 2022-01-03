import React from "react";
import {Logo} from './Logo'
import NextLink from "next/link"
import {HamburgerIcon} from '@chakra-ui/icons'
import {
   Container,
   Box,
   Link,
   Stack,
   Heading,
   Flex,
   Menu,
   MenuItem,
   MenuButton,
   IconButton,
   useColorModeValue
} from '@chakra-ui/react'

const LinkItem: React.FC<{ href: string, path: string }> = (props) => {
   const {href, children, path} = props
   const activeItem = path === href
   const activeColor = useColorModeValue('gray.200', 'whiteAlpha.900')

   return (
      <NextLink href={href}>
         <Link
            p={2}
            bg={activeItem ? 'glassTeal' : undefined}
            color={activeItem ? '#202023' : activeColor}
         >
            {children}
         </Link>
      </NextLink>
   )
}

