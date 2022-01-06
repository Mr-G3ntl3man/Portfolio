import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {
   Box,
   Flex,
   FormControl, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useColorModeValue,
} from '@chakra-ui/react';
import {CustomButton} from "../Additions/CustomButton";
import React, {ChangeEvent, useState} from "react";
import {Spinner} from "../Additions/Spinner";
import {CheckCircleIcon, WarningIcon} from '@chakra-ui/icons';
import style from "../../styles/Input.module.css";
import parsePhoneNumberFromString from "libphonenumber-js";


export type FormDataType = {
   name: string
   tel: number
   email: string
   message: string
}

export const ContactForm = () => {
   const [showModal, setShowModal] = useState<boolean>(false)
   const [loading, setLoading] = useState<boolean>(false)
   const [error, setError] = useState<boolean>(false)

   const themeInputClassName = `${style.defaultInput} ${useColorModeValue(`${style.lightAutofill} ${style.light}`, `${style.darkAutofill} ${style.dark}`)}`
   const themeErrorStyle = useColorModeValue(`tomato`, `yellow`)
   const themeErrorClassName = `${style.error} ${useColorModeValue(`${style.errorLight}`, `${style.errorDark}`)}`

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
            <ModalContent mx={5} py={5} textAlign={'center'}>
               <ModalHeader mt={4}> {error
                  ? <Flex justify={'center'} alignItems={'center'}>
                     The application has not been sent!
                     <WarningIcon w={'30px'} h={'30px'} color={'red.400'} ml={2}/>
                  </Flex>
                  : <Flex justify={'center'} alignItems={'center'}>
                     Application submitted!
                     <CheckCircleIcon w={'30px'} h={'30px'} color={'green.400'} ml={2}/>
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
                        style={{borderColor: errors.name && themeErrorStyle}}
                        placeholder=' '
                        className={themeInputClassName}
                        {...register("name", {required: true})}/>
                     <label className={style.labelText}>Name: *</label>
                     {!!errors.name && <div className={themeErrorClassName}>{errors.name?.message}</div>}
                  </Box>

                  <Box position="relative" h={'40px'} w={{base: 'auto', md: '300px'}} m={2} mb={{base: 8, md: 3}}>
                     <input
                        style={{borderColor: errors.email && themeErrorStyle}}
                        placeholder=' '
                        className={themeInputClassName}
                        {...register("email", {required: true})}/>
                     <label className={style.labelText}>Email: *</label>
                     {!!errors.email && <div className={themeErrorClassName}>{errors.email?.message}</div>}
                  </Box>
               </Box>

               <Box position="relative" h={'40px'} mx={2} my={5} mb={{base: 7, md: 0}}>
                  <input
                     placeholder=' '
                     type={'tel'}
                     className={themeInputClassName}
                     {...register("tel", {required: false})}
                     onChange={onChangeHandler}/>
                  <label className={style.labelText}>Telephone:</label>
                  {!!errors.tel && <div className={themeErrorClassName}>{errors.tel?.message}</div>}
               </Box>

               <Box position="relative" h={'150px'} mx={2} my={5}>
                  <textarea
                     style={{
                        padding: '10px',
                        borderColor: errors.email && themeErrorStyle
                     }}
                     placeholder=' '
                     className={themeInputClassName}
                     {...register("message", {required: true})}/>
                  <label className={style.labelText}>Message: *</label>
                  {!!errors.message && <div className={themeErrorClassName}>{errors.message?.message}</div>}
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

