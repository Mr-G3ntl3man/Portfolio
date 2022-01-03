import React from 'react'
import NextLink from "next/link"
import {LinkBox, Image} from "@chakra-ui/react"
import {SwiperSlide, Swiper} from 'swiper/react'
import {Autoplay} from "swiper"
import 'swiper/css'
import 'swiper/css/autoplay'


export const Slider = () => (
   <Swiper
      lazy={true}
      loop
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{
         "delay": 2000,
         "disableOnInteraction": false
      }}
      breakpoints={{
         "768": {
            "slidesPerView": 2,
         }
      }}>

      <SwiperSlide className={'slide'}>
         <NextLink href={'works/social_network'}>
            <LinkBox cursor={'pointer'}>
               <Image
                  borderRadius={10}
                  objectFit={'cover'}
                  alt={'social_network'}
                  loading={'lazy'}
                  minH={'200px'}
                  src={'/images/works/social_network/main.jpg'}/>
            </LinkBox>
         </NextLink>
      </SwiperSlide>

      <SwiperSlide className={'slide'}>
         <NextLink href={'works/to_do_list'}>
            <LinkBox cursor={'pointer'}>
               <Image
                  borderRadius={10}
                  objectFit={'cover'}
                  loading={'lazy'}
                  minH={'200px'}
                  alt={'to_do_list'}
                  src={'/images/works/todo/main.jpg'}/>
            </LinkBox>
         </NextLink>
      </SwiperSlide>

      <SwiperSlide className={'slide'}>
         <NextLink href={'works/to_do_list'}>
            <LinkBox cursor={'pointer'}>
               <Image
                  borderRadius={10}
                  objectFit={'cover'}
                  loading={'lazy'}
                  minH={'200px'}
                  alt={'to_do_list'}
                  src={'/images/works/todo/main.jpg'}/>
            </LinkBox>
         </NextLink>
      </SwiperSlide>

      <SwiperSlide className={'slide'}>
         <NextLink href={'works/to_do_list'}>
            <LinkBox cursor={'pointer'}>
               <Image
                  borderRadius={10}
                  objectFit={'cover'}
                  minH={'200px'}
                  alt={'to_do_list'}
                  src={'/images/works/todo/main.jpg'}/>
            </LinkBox>
         </NextLink>
      </SwiperSlide>

   </Swiper>
)

