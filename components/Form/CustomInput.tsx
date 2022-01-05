import {useColorModeValue} from '@chakra-ui/react';
import React, {CSSProperties, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import style from '../../styles/Input.module.css'

type InputT = {
   label?: string
   css?: CSSProperties
   error?: boolean
   errorMessage?: string
   hookForm?: any
}

export const CustomInput: React.FC<InputT> = (
   {
      css, label,
      errorMessage, error,
      hookForm, children,
      ...restProps
   }) => {

   const labelTextDefault = label ? label : 'Введите текст'

   return (
      <div className={style.inputWrap}>
         <input
            style={css}
            placeholder=' '
            className={style.defaultInput}
            {...hookForm}
         />
         <label style={{
            backgroundColor: useColorModeValue('#f0e7db', '#202023'),
            color: useColorModeValue('#000', '#fff')
         }}
                className={style.labelText}>{labelTextDefault}</label>
         <div className={`${style.error} ${error && style.showError}`}>{errorMessage}</div>
      </div>
   )

}

