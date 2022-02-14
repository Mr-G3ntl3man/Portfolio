import React from 'react';
import {Layout} from "../../components/Layout/Article";
import {Container, Link, List, ListItem} from "@chakra-ui/react";
import {Title, WorkImage, WorkInfo} from "../../components/Additions/Work";
import {P} from "../../components/Additions/P";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const SocialNetwork = () => {
   return (
      <Layout title={'Social_network'}>
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
                  <Link target={'_blank'} href='https://mr-g3ntl3man.github.io/Social_Network'>
                     mr-g3ntl3man.github.io/Social_Network<ExternalLinkIcon mx={'2px'}/> </Link>
               </ListItem>
               <ListItem>
                  <WorkInfo>Stack</WorkInfo>
                  <span>Typescript, React, Redux</span>
               </ListItem>
            </List>

            <WorkImage src={'/images/works/social_network/profile.jpg'} alt={'profile page'}/>
            <WorkImage src={'/images/works/social_network/chat.jpg'} alt={'chat page'}/>
            <WorkImage src={'/images/works/social_network/spotify.jpg'} alt={'spotify page'}/>
            <WorkImage src={'/images/works/social_network/spotifyLyrics.jpg'} alt={'spotify lyrics page'}/>

         </Container>
      </Layout>
   );
};

export default SocialNetwork;
