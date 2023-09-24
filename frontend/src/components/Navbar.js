import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Flex,
    Center,
    Image,
    Circle,
    FormControl,
    Input,
    FormLabel,
    Textarea,
    Checkbox,
    CheckboxGroup
} from '@chakra-ui/react';
import React from 'react';
import { Stack, Icon } from '@chakra-ui/react'

//icons 
import { AiFillHome } from 'react-icons/ai'
import { GiPodium } from "react-icons/gi";
import { AiFillPlusCircle } from "react-icons/ai";

const Navbar = () => {
    return(
        <Center>
            <Flex flexDirection="row"
            bg="#361134" w="360px" h="69px"  position="fixed" 
            bottom="0" left="0" right="0">
                <Center>
                    <Box padding="20px">
                        <Stack direction="row" spacing={20} padding="20px">  
                            <Icon as={AiFillHome} w="40px" h="40px" color="#FFFFFF"/>
                            <Icon as={GiPodium} w="40px" h="40px" color="#FFFFFF"/>
                            <Icon as={AiFillPlusCircle} w="40px" h="40px" color="#FFFFFF"/>
                        </Stack>
                    </Box>
                </Center>
            </Flex>
        </Center>
    );
}

export default Navbar;