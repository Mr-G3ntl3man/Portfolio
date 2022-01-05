import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {
   Box,
   Flex,
   FormControl, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
   Textarea, useColorModeValue,
} from '@chakra-ui/react';
import {CustomButton} from "../Additions/CustomButton";
import React, {ChangeEvent, CSSProperties, useState} from "react";
import {Spinner} from "../Additions/Spinner";
import {CheckCircleIcon, WarningIcon} from '@chakra-ui/icons';
import style from "../../styles/Input.module.css";
import parsePhoneNumberFromString from "libphonenumber-js";

export const ContactForm = () => {
   const [showModal, setShowModal] = useState<boolean>(false)
   const [loading, setLoading] = useState<boolean>(false)
   const [error, setError] = useState<boolean>(false)

   const inputStyle: CSSProperties = {
      borderColor: useColorModeValue('#202023', '#f0e7db'),
      color: useColorModeValue('#202023', '#f0e7db'),
   }
   const labelStyle: CSSProperties = {
      backgroundColor: useColorModeValue('#f0e7db', '#202023'),
      color: useColorModeValue('#202023', '#f0e7db'),
   }

   const errorStyle: CSSProperties = {
      color: useColorModeValue('tomato', 'yellow'),
   }

   const schema = yup.object().shape({
      name: yup
         .string()
         .matches(/^([^0-9]*)$/, 'Name should not contain number!')
         .required('Name is a required field'),
      email: yup
         .string()
         .email('Email should have correct format!')
         .required('Email is a required field!'),
      message: yup
         .string()
         .required('Message is a required field'),
   })

   const {register, handleSubmit, reset, formState: {errors}} = useForm<FormDataType>({
      mode: "onChange",
      resolver: yupResolver(schema),
      defaultValues: {
         email: '',
         tel: undefined,
         message: '',
         name: ''
      }
   })

   const onSubmit: SubmitHandler<FormDataType> = (data) => {
      const form = new FormData()
      form.set('data', JSON.stringify(data))

      setLoading(true)

      fetch('https://send-telegram-form.herokuapp.com/', {
         mode: 'no-cors',
         method: 'POST',
         body: form
      })
         .then(res => {
            error && setError(false)
            setLoading(false)
            setShowModal(true)
            setTimeout(() => setShowModal(false), 5000)
            reset()
         })
         .catch(er => {
            setError(true)
            setLoading(false)
            reset()
         })
   }

   const formatTelephone = (value: string) => {
      const phone = parsePhoneNumberFromString(value, "RU")

      if (!phone) {
         return value
      }

      return phone.formatInternational()
   }

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      e.target.value = e.target.value.replace(/[^+\d]/g, '')
      e.target.value = formatTelephone(e.target.value)
   }

   return (
      <>
         {loading && <Spinner/>}

         <Modal
            motionPreset='slideInBottom'
            size={'xl'}
            isOpen={showModal}
            onClose={() => setShowModal(state => !state)}>
            <ModalOverlay/>
            <ModalContent py={5} textAlign={'center'}>
               <ModalHeader> {error
                  ? <Flex justify={'center'} alignItems={'center'}>
                     The application has not been sent!
                     <WarningIcon color={'red.400'} ml={2}/>
                  </Flex>
                  : <Flex justify={'center'} alignItems={'center'}>
                     Application submitted!
                     <CheckCircleIcon color={'green.400'} ml={2}/>
                  </Flex>
               } </ModalHeader>
               <ModalCloseButton/>
               <ModalBody>
                  {error
                     ? <>
                        An error occurred while sending the application, please try again or contact me via mail
                        <Link ml={2} href="mailto:arch3run@gmail.com">arch3run@gmail.com</Link>
                     </>
                     : 'Thank you for submitting your application. I will contact you soon.'}
               </ModalBody>

            </ModalContent>
         </Modal>

         <Flex style={{
            opacity: loading ? '0.5' : '1',
            pointerEvents: loading ? 'none' : 'auto'
         }} justify={'center'}>
            <FormControl
               as={'form'}
               w={{base: '100%', md: '80%'}}
               noValidate
               onSubmit={handleSubmit(onSubmit)}>

               <Box display={{base: 'block', md: 'flex'}} alignItems={'center'} justifyContent={'space-between'} mb={2}>
                  <Box h={'40px'} position="relative" w={{base: 'auto', md: '300px'}} m={2} mb={{base: 8, md: 3}}>
                     <input
                        style={inputStyle}
                        placeholder=' '
                        className={style.defaultInput}
                        {...register("name", {required: true})}/>
                     <label style={labelStyle} className={style.labelText}>Name</label>
                     {!!errors.name && <div style={errorStyle} className={style.error}>{errors.name?.message}</div>}
                  </Box>


                  <Box position="relative" h={'40px'} w={{base: 'auto', md: '300px'}} m={2} mb={{base: 8, md: 3}}>
                     <input
                        style={inputStyle}
                        placeholder=' '
                        className={style.defaultInput}
                        {...register("email", {required: true})}/>
                     <label style={labelStyle} className={style.labelText}>Email</label>
                     {!!errors.email && <div style={errorStyle} className={style.error}>{errors.email?.message}</div>}
                  </Box>
               </Box>

               <Box position="relative" h={'40px'} mx={2} my={5} mb={{base: 7, md: 0}}>
                  <input
                     style={inputStyle}
                     placeholder=' '
                     type={'tel'}
                     className={style.defaultInput}
                     {...register("tel", {required: false})}
                     onChange={onChangeHandler}
                  />
                  <label style={labelStyle} className={style.labelText}>Telephone</label>
                  {!!errors.tel && <div style={errorStyle} className={style.error}>{errors.tel?.message}</div>}
               </Box>

               <Box position="relative" h={'150px'} mx={2} my={5}>
                  <Textarea
                     style={{
                        ...inputStyle,
                        resize: 'none',
                        height: '150px',
                        borderWidth: '1px'
                     }}
                     placeholder=' '
                     className={style.defaultInput}
                     {...register("message", {required: true})}/>
                  <label style={labelStyle} className={style.labelText}>Message</label>
                  {!!errors.message && <div style={errorStyle} className={style.error}>{errors.message?.message}</div>}
               </Box>


               <Box my={7} align={'center'}>
                  <CustomButton
                     disabled={showModal}
                     name={'Send message'}
                     transition={false}
                     type={'submit'}/>
               </Box>
            </FormControl>
         </Flex>

      </>
   )
}


export type FormDataType = {
   name: string
   tel: number
   email: string
   message: string
}
