import { ChakraProvider, Box, Text, Spacer, Link, VStack, Code, Grid, theme, Wrap, WrapItem, Flex, Center, Image, Circle, FormControl, Input, FormLabel, Textarea, Checkbox, CheckboxGroup, Button, ButtonGroup } from '@chakra-ui/react';
import { BsFillPersonFill } from 'react-icons/bs';


const Home = () => {
    return (
        <Center>
            <Flex flexDirection='row' w="275px" my={4}>
                <Flex><Text fontSize="25px" fontWeight="semibold">ChallengeHer</Text></Flex>
                <Spacer/>
                <Flex><Box pt="4px"><BsFillPersonFill size={30}/></Box></Flex>
            </Flex>
        </Center>
    );
}

export default Home