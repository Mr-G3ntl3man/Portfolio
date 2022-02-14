import React from 'react';
import {Layout} from "../../components/Layout/Article";
import {Container, Link, List, ListItem} from "@chakra-ui/react";
import {Title, WorkImage, WorkInfo} from "../../components/Additions/Work";
import {P} from "../../components/Additions/P";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const ToDoList = () => {
   return (
      <Layout title={'To_do_list'}>
         <Container maxW={'container.sm'}>
            <Title>
               Learning cards
            </Title>
            <P>
               A card learning app where you can create your own decks and cards to study and review material and learn
               from other people's cards. There is also a profile where you can change your information. There is a
               login, registration and password recovery.
            </P>

            <List ml={4} my={4}>
               <ListItem>
                  <WorkInfo>Website</WorkInfo>
                  <Link target={'_blank'} href='https://mr-g3ntl3man.github.io/Learning_cards/'>
                     mr-g3ntl3man.github.io/Learning_cards <ExternalLinkIcon mx={'2px'}/> </Link>
               </ListItem>
               <ListItem>
                  <WorkInfo>Stack</WorkInfo>
                  <span>Typescript, React, Redux</span>
               </ListItem>
            </List>

            <WorkImage src={'/images/works/learning_cards/L_C-Profile.png'} alt={'learning cards profile page'}/>
            <WorkImage src={'/images/works/learning_cards/L_C-Packs.png'} alt={'learning cards packs page'}/>
            <WorkImage src={'/images/works/learning_cards/L_C-Cards.png'} alt={'learning cards cards page'}/>
            <WorkImage src={'/images/works/learning_cards/L_C-Learn.png'} alt={'learning cards learn progress page'}/>

         </Container>
      </Layout>
   );
};

export default ToDoList;
