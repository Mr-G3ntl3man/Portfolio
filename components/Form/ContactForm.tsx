import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {Box, Flex, Input} from '@chakra-ui/react';
import {CustomButton} from "./CustomButton";

export type FormDataType = {
   name: string
   tel: number
   email: string
   message: string
}


export const ContactForm = () => {
   const schema = yup.object().shape({
      name: yup
         .string()
         .required('Email is a required field'),
      tel: yup
         .number()
         .required('Telephone is a required field'),
      email: yup
         .string()
         .email('Email should have correct format')
         .required('Email is a required field'),
      message: yup
         .string()
         .required('Message is a required field'),
   })

   const {register, handleSubmit, reset, formState: {errors}} = useForm<FormDataType>({
      mode: "onBlur",
      resolver: yupResolver(schema),
      defaultValues: {
         email: '',
         tel: undefined,
         message: '',
         name: ''
      }
   })

   const onSubmit: SubmitHandler<FormDataType> = (data) => {
      console.log(data)
      reset()
   }

   return (
      <Flex justify={'center'}>
         <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}>

            <Flex mb={2}>


            </Flex>


            <Box my={2} align={'center'}>
               <CustomButton name={'Send message'} transition={false} type={'submit'}/>
            </Box>
         </form>
      </Flex>
   )
}
