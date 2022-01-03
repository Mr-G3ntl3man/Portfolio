import styled from "@emotion/styled";
import Image from 'next/image'
import Link from 'next/link'
import {Text, useColorModeValue} from "@chakra-ui/react";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transform: rotate(0deg);
    transition: transform 0.2s ease-in-out;
  }

  &:hover img {
    transform: rotate(20deg);
    transition: transform 0.2s ease-in-out;
  }
`


const Logo = () => {
   const srcImg = `/images/logo/${useColorModeValue('logo_dark', 'logo_light')}.svg`

   return (
      <Link href="/">
         <a>
            <LogoBox>
               <Image src={srcImg} width={30} height={25} alt={'logo'}/>

               <Text
                  color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                  fontWeight={'bold'}
                  ml={3}>
                  Arthur Pashchuk
               </Text>
            </LogoBox>
         </a>

      </Link>
   )
}

export default Logo