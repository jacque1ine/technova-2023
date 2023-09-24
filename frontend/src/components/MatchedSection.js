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
import { Button, ButtonGroup } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'

const MatchedSection = () => {
    return (
        <Center>
            <Flex flexDirection= 'column' mt="173px">
                <Center>
                    <Text w="245px" h="80px" color="#361134" mb="70px" fontWeight="bold" fontSize="25px"> 
                        You Have Been Matched!
                    </Text>
                </Center>
                <Center>
                    <Flex flexDirection= 'row' mb="70px">
                        <Center>
                            <Box w="100px" h="100px" borderRadius="50%" bg="#ECECEC" mr="7px"/>
                            <AddIcon boxSize={7} color="#361134" mr="7px" />
                            <Box w="100px" h="100px" borderRadius="50%" bg="#ECECEC"/>
                        </Center>
                    </Flex>
                </Center>
                <Center>
                    <Button type="button" fontSize="16px" fontWeight="semibold" bg="#DBF4A7" px="10px" w="203px" h="50px">
                        Start Challenge
                    </Button>
                </Center>
            </Flex>
        </Center>
    );
}

export default MatchedSection;
