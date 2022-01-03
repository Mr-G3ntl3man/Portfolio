import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import {Section} from '../components/Section/Section'
import {WorkGridItem} from '../components/Additions/Grid-item'
import socialNetwork from '../public/images/works/social_network/main.jpg'
import toDoList from '../public/images/works/todo/main.jpg'
import {Layout} from "../components/Layout/Article";

const Works = () => (
   <Layout>
      <Container maxW={'container.md'}>
         <Heading as={'h3'} fontSize={20} mb={4}>
            Works
         </Heading>
         <SimpleGrid column={1} gap={6}>
            <Section delay={'0.2'}>
               <WorkGridItem
                  imgSrc={socialNetwork}
                  title={'Social Network'}
                  id={'social_network'}>
                  A application for communication and training of junior developers, as well as listening to music using
                  Spotify Web Api.
               </WorkGridItem>
            </Section>

            <Section delay={'0.4'}>
               <WorkGridItem
                  imgSrc={toDoList}
                  title={'To Do List'}
                  id={'to_do_list'}>
                  A to-do list app that helps you manage your tasks.
               </WorkGridItem>
            </Section>

         </SimpleGrid>
      </Container>
   </Layout>
)

export default Works;