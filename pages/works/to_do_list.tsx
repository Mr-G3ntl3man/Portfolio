import React from 'react';
import {Layout} from "../../components/Layout/Article";
import {Container, Link, List, ListItem} from "@chakra-ui/react";
import {Title, WorkImage, WorkInfo} from "../../components/common/Work";
import {P} from "../../components/common/P";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const ToDoList = () => {
   return (
      <Layout title={'To_do_list'}>
         <Container maxW={'container.sm'}>
            <Title>
               To Do List
            </Title>
            <P>
               A to-do list app that helps you manage your tasks.
            </P>

            <List ml={4} my={4}>
               <ListItem>
                  <WorkInfo>Website</WorkInfo>
                  <Link target={'_blank'} href='https://mr-g3ntl3man.github.io/To_Do_List'>
                     mr-g3ntl3man.github.io/To_Do_List <ExternalLinkIcon mx={'2px'}/> </Link>
               </ListItem>
               <ListItem>
                  <WorkInfo>Stack</WorkInfo>
                  <span>Typescript, React, Redux</span>
               </ListItem>
            </List>

            <WorkImage src={'/images/works/todo/main.jpg'} alt={'todo main page'}/>
         </Container>
      </Layout>
   );
};

export default ToDoList;
