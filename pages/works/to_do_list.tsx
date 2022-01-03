import React from 'react';
import {Layout} from "../../components/Layout/Article";
import {Container, Link, List, ListItem} from "@chakra-ui/react";
import {Title, WorkImage, WorkInfo} from "../../components/Work";
import {P} from "../../components/P";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const SocialNetwork = () => {
   return (
      <Layout title={'social_network'}>
         <Container maxW={'container.sm'}>
            <Title>
               Social Network
            </Title>
            <P>
               A application for communication and training of junior developers, as well as listening to music using
               Spotify Web Api.
            </P>

            <List ml={4} my={4}>
               <ListItem>
                  <WorkInfo>Website</WorkInfo>
                  <Link target={'_blank'} href='https://mrgentelman.github.io/Social_Network'>
                     https://mrgentelman.github.io/Social_Network <ExternalLinkIcon mx={'2px'}/> </Link>
               </ListItem>
               <ListItem>
                  <WorkInfo>Stack</WorkInfo>
                  <span>Typescript, React, Redux</span>
               </ListItem>
            </List>

            <WorkImage src={'/images/works/social_network/profile.jpg'} alt={'social_network profile'}/>
            <WorkImage src={'/images/works/social_network/spotify.jpg'} alt={'social_network spotify'}/>
            <WorkImage src={'/images/works/social_network/chat.jpg'} alt={'social_network chat'}/>

         </Container>
      </Layout>
   );
};

export default SocialNetwork;
