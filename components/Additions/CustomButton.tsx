import React from 'react';
import style from '../../styles/Btn.module.css'
import NextLink from "next/link"
import {useColorModeValue} from "@chakra-ui/react";

type ButtonT = {
   type?: "button" | "submit" | "reset" | undefined
   name: string
   transition: boolean
   href?: string
   onClick?: () => void
   disabled?: boolean
}

export const CustomButton: React.FC<ButtonT> = (
   {
      type,
      name,
      transition,
      href,
      onClick,
      disabled
   }) => {
   const mode = {color: useColorModeValue('#222', '#fff')}

   return (transition
      ? <NextLink href={href as string}>
         <button disabled={disabled} onClick={onClick} type={type} className={style.wrapper}>
            <span style={mode}>{name}</span>
            <span>{name}</span>
         </button>
      </NextLink>
      : <button disabled={disabled} onClick={onClick} type={type} className={style.wrapper}>
         <span style={mode}>{name}</span>
         <span>{name}</span>
      </button>)
}
