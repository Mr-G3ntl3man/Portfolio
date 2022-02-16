import React from "react";
import Logo from './Logo'
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
   useColorModeValue, MenuList
} from '@chakra-ui/react'
import ThemeToggleBtn from "./Theme-toggle-btn";
import {IoLogoGithub} from 'react-icons/io5'

const LinkItem: React.FC<{ href: string, path: string }> = (props) => {
   const {href, children, path} = props
   const activeItem = path === href
   const activeColor = useColorModeValue('gray200', 'whiteAlpha.900')

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


export const Navbar: React.FC<{ path: string }> = (props) => {
   const {path} = props

   return (
      <Box
         position={'fixed'}
         as={'nav'}
         w={'100%'}
         bg={useColorModeValue('#ffffff40', '#20202380')}
         style={{backdropFilter: 'blur(10px)'}}
         zIndex={10}
         {...props}>

         <Container
            display={'flex'}
            p={2}
            maxW={'container.md'}
            justify={'space-between'}
            wrap={'wrap'}
            align={'center'}>

            <Flex align='center' mr={5}>
               <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'}>
                  <Logo/>
               </Heading>
            </Flex>

            <Stack
               direction={{base: 'column', md: 'row'}}
               display={{base: 'none', md: 'flex'}}
               width={{base: 'full', md: 'auto'}}
               alignItems={'center'}
               flexGrow={1}
               mt={{base: 4, nmd: 0}}>
               <LinkItem href={'/works'} path={path}>Works</LinkItem>
               <Link target="_blank"
                     href={'https://github.com/MrGentelman'}
                     display={'flex'}
                     alignItems={'center'}>
                  <span style={{
                     display: 'inline-block',
                     marginRight: '5px'
                  }}>
                  <IoLogoGithub/>
                  </span>
                  View Source</Link>
            </Stack>

            <Box flex={1} align={'right'}>
               <ThemeToggleBtn/>

               <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                  <Menu>
                     <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant={'outlined'} aria-label={'Menu'}/>
                     <MenuList>
                        <NextLink href={'/works'} passHref>
                           <MenuItem as={Link}>Works</MenuItem>
                        </NextLink>

                        <MenuItem pl={4} as={Link}
                                  target="_blank"
                                  href={'https://github.com/MrGentelman'}
                                  display={'flex'}
                                  alignItems={'center'}>
                            <span style={{
                               display: 'inline-block',
                               marginRight: '5px'
                            }}>
                          <IoLogoGithub/>
                          </span>
                           View Source</MenuItem>
                     </MenuList>
                  </Menu>
               </Box>

            </Box>

         </Container>
      </Box>
   );
};

