import React from 'react'
import {Image} from "@chakra-ui/react"
import {SwiperSlide, Swiper} from 'swiper/react'
import {Autoplay, EffectCube} from "swiper"
import 'swiper/css'
import 'swiper/css/autoplay'
import "swiper/css/effect-cube";

const SlideImage: React.FC<{ src: string }> = ({src}) => (
   <Image
      borderRadius={10}
      objectFit={'cover'}
      alt={'developer coding process'}
      loading={'lazy'}
      maxH={'300px'}
      w={{base: '100%', md: '80%'}}
      src={src}/>
)

export const SliderGif = () => (
   <Swiper
      lazy={true}
      loop
      modules={[Autoplay, EffectCube]}
      effect={'cube'}
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{
         "delay": 4000,
         "disableOnInteraction": false
      }}>
      <SwiperSlide>
         <SlideImage src={'/images/gif/1.gif'}/>
      </SwiperSlide>

      <SwiperSlide>
         <SlideImage src={'/images/gif/2.gif'}/>
      </SwiperSlide>

      <SwiperSlide>
         <SlideImage src={'/images/gif/4.gif'}/>
      </SwiperSlide>

      <SwiperSlide>
         <SlideImage src={'/images/gif/5.gif'}/>
      </SwiperSlide>

      <SwiperSlide>
         <SlideImage src={'/images/gif/6.gif'}/>
      </SwiperSlide>

      <SwiperSlide>
         <SlideImage src={'/images/gif/7.gif'}/>
      </SwiperSlide>

      <SwiperSlide>
         <SlideImage src={'/images/gif/8.gif'}/>
      </SwiperSlide>

      <SwiperSlide>
         <SlideImage src={'/images/gif/10.gif'}/>
      </SwiperSlide>

      <SwiperSlide>
         <SlideImage src={'/images/gif/11.gif'}/>
      </SwiperSlide>
   </Swiper>
)

