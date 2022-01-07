import {
   Badge,
   Box,
   Container,
   Heading,
   Image, Link,
   List,
   ListItem,
   useColorModeValue
} from "@chakra-ui/react";
import {Section} from "../components/Section/Section";
import {P} from "../components/Additions/P";
import {Layout} from "../components/Layout/Article";
import React from "react";
import {Skill} from "../components/Additions/Skill";
import {Slider} from "../components/Additions/SliderPortfolio";
import {CustomButton} from "../components/Additions/CustomButton";
import {ContactForm} from "../components/Form/ContactForm";

const App = () => {
   return (
      <Layout>
         <Container zIndex={100} maxW={'container.md'}>
            <Box
               borderRadius={"lg"}
               bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
               p={3} align="center" m={6}>
               Hello, I&apos;m a front-end developer based in Moscow!
            </Box>

            <Section delay={'0.1'}>
               <Box display={{md: 'flex'}} alignItems={'center'}>
                  <Box flexGrow={1}>
                     <Heading as={'h2'} variant={'page-title'}>
                        Arthur Pashchuk
                     </Heading>

                     <span>Developer / Student</span>
                  </Box>

                  <Box
                     flexShrink={0}
                     mt={{base: 4, md: 0}}
                     ml={{md: 6}}
                     align={'center'}>
                     <Image
                        borderColor={'whiteAlpha.800'}
                        borderWidth={2}
                        objectFit={'cover'}
                        width={'100px'}
                        height={'100px'}
                        borderRadius={'full'}
                        borderStyle={'solid'}
                        display={'inline-block'}
                        src={'/images/avatar.jpg'}
                        alt={'avatar'}/>
                  </Box>
               </Box>

               <P>
                  Front-End developer with experience in
                  creating SPA using React,
                  Redux ,HTML,CSS, JS. Seeking a frontend developer position with a company
                  which will require me to utilize my skills,
                  abilities in the IT field to ensure the
                  company's success. Ready to consider
                  project work and full-time employment. In
                  the future i see myself as a Full Stack.
               </P>

               <Box align={'center'} my={2}>
                  <Link display={'inline-block'} href={'/images/CV/CV.pdf'} download>
                     <CustomButton transition={false} name={'Download CV'}/>
                  </Link>
               </Box>
            </Section>

            <Section delay={'0.2'}>
               <Heading pb={1} as={'h3'} variant={'section-title'}>
                  Skills
               </Heading>
               <Skill skill={'HTML5 & CSS3'} progressValue={90}/>
               <Skill skill={'TYPESCRIPT'} progressValue={80}/>
               <Skill skill={'REACT'} progressValue={85}/>
            </Section>

            <Section delay={'0.3'}>
               <Heading as={'h3'} variant={'section-title'}>
                  Education
               </Heading>

               <List ml={4} my={4}>
                  <ListItem display={{base: 'block', sm: 'flex'}} alignItems={'flex-start'} my={4}>
                     <Badge
                        textAlign={'center'}
                        mW={'130px'}
                        fontSize={16}
                        colorScheme={useColorModeValue('telegram', 'green')}
                        mr={2}>
                        2017 - 2020 </Badge>
                     <Box>
                        <Link
                           target={'_blank'}
                           href={'https://stolitsa.mskobr.ru/'}>
                           Educational complex of urban planning Capital:</Link>
                        <span style={{display: 'block'}}>Construction and operation of buildings and structures</span>
                     </Box>
                  </ListItem>

                  <ListItem display={{base: 'block', sm: 'flex'}} alignItems={'flex-start'} my={4}>
                     <Badge textAlign={'center'}
                            mW={'130px'}
                            fontSize={16}
                            colorScheme={useColorModeValue('telegram', 'green')} mr={2}>
                        2020 - Present</Badge>
                     <Box>
                        <Link
                           target={'_blank'}
                           href={'https://mti.edu.ru/'}>
                           Moscow Technological Institute:</Link>
                        <span style={{display: 'block'}}>Applied Informatics in Economics</span>
                     </Box>
                  </ListItem>
               </List>
            </Section>

            <Section delay={'0.4'}>
               <Heading mb={5} as={'h3'} variant={'section-title'}>
                  Portfolio
               </Heading>

               <Slider/>

               <Box align={'center'} my={6}>
                  <CustomButton transition={true} href={'/works'} name={'Portfolio'}/>
               </Box>
            </Section>

            <Section delay={'0.4'}>
               <Heading mb={5} as={'h3'} variant={'section-title'}>
                  Get in touch
               </Heading>
               <ContactForm/>
            </Section>

         </Container>
      </Layout>
   )
}

export default App

