import {Box, Container, Divider, Heading, Text} from "@chakra-ui/react";
import {CustomButton} from "../components/common/CustomButton";
import React from "react";

const NotFound = () => (
   <Container mt={20}>
      <Heading as={'h1'}>Not Found</Heading>

      <Text>The page you are viewing does not exist </Text>

      <Divider my={6}/>

      <Box align={'center'} my={6}>
         <CustomButton transition={true} href={'/'} name={'Return to home'}/>
      </Box>
   </Container>
)

export default NotFound;