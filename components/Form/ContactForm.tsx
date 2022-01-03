import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {Box, Flex, FormControl, FormHelperText, FormLabel, Input, Textarea} from '@chakra-ui/react';
import {CustomButton} from "../Additions/CustomButton";
import {useState} from "react";

export type FormDataType = {
   name: string
   tel: number
   email: string
   message: string
}


export const ContactForm = () => {
   const [show, setShow] = useState<boolean>(false)

   const schema = yup.object().shape({
      name: yup
         .string()
         .required('Name is a required field'),
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

      fetch('./sendTelegram.php', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf-8'
         },
         body: JSON.stringify(data)
      })
         .then(res => {
            console.log(res)
            setShow(true)
            reset()
         })
         .catch(er => {
            console.log(er)
         })
   }

   return (
      <Flex justify={'center'}>
         <FormControl
            as={'form'}
            w={'80%'}
            noValidate
            onSubmit={handleSubmit(onSubmit)}>

            <Box display={{base: 'block', md: 'flex'}} justifyContent={'space-between'} mb={2}>
               <Box w={'300px'} m={2}>
                  <FormLabel htmlFor='name'>Name</FormLabel>
                  <Input
                     borderColor={!!errors.name ? 'yellow' : 'teal'}
                     {...register("name", {required: true})} />
                  {!!errors.name && <FormHelperText color={'yellow'}>{errors.name?.message}</FormHelperText>}
               </Box>

               <Box w={'300px'} m={2}>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input
                     borderColor={!!errors.email ? 'yellow' : 'teal'}
                     type='email'
                     {...register("email", {required: false})} />
                  {!!errors.email && <FormHelperText color={'yellow'}>{errors.email?.message}</FormHelperText>}
               </Box>
            </Box>

            <Box m={2}>
               <FormLabel htmlFor='tel'>Telephone</FormLabel>
               <Input
                  borderColor={!!errors.tel ? 'yellow' : 'teal'}
                  type='tel'
                  {...register("tel", {required: true})} />
               {!!errors.tel && <FormHelperText color={'yellow'}>{errors.tel?.message}</FormHelperText>}
            </Box>

            <Box m={2}>
               <FormLabel htmlFor='message'>Message</FormLabel>
               <Textarea
                  borderColor={!!errors.message ? 'yellow' : 'teal'}
                  {...register("message", {required: true})} />
               {!!errors.message && <FormHelperText color={'yellow'}>{errors.message?.message}</FormHelperText>}
            </Box>


            <Box my={5} align={'center'}>
               <CustomButton name={'Send message'} transition={false} type={'submit'}/>
            </Box>
         </FormControl>
      </Flex>
   )
}
