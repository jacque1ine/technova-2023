import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme, Wrap, WrapItem, Flex, Center, Image, Circle, FormControl, Input, FormLabel, Textarea, Checkbox, CheckboxGroup, Button, ButtonGroup } from '@chakra-ui/react';
import { SiLinkedin } from 'react-icons/si';
import { BiCoinStack } from 'react-icons/bi';


//smth wrong w map function at bottom lol
const ViewProfile = (props) => {
    return(
        <Center m={10} >
            <Flex flexDirection='column' mb={10}>
                <Center><Circle w="130px" h="130px" bg='#FAF6F6' mt="81px"></Circle></Center>
                <Text fontWeight="bold" fontSize="25px" mt={2} mb={1}>{props.name}</Text>
                <Text fontSize="17px">{props.pronouns}</Text>
                <Text fontSize='18px'>{props.location}</Text>
                <Center>
                    <Flex flexDirection='row'>
                        <Link src={props.linkedin}><Box pt={2} boxSize={6} ml={3}><SiLinkedin/></Box></Link>
                        <Center px={4}><Text>|</Text></Center>
                        <Flex>
                            <Box pt={2} boxSize={6}><BiCoinStack/></Box>
                            <Box pt="2px"><Text>{props.coins}</Text></Box>
                        </Flex>
                    </Flex>
                </Center>
                <Text fontSize="16px" mt={4}>{props.bio}</Text>
                {props.tags.length != 0 ?
                    (<Center mt={6}>
                        <Flex flexDirection='row'>
                            <Wrap>
                                {props.tags.map((tagname, index) => {
                                    <WrapItem key={index}>
                                        <Tag tag={tagname}/>
                                    </WrapItem>
                                })}
                            </Wrap>
                        </Flex>
                    </Center>)
                : null
                }
            </Flex>
        </Center>
    );
}

const Tag = (props) => {
    return (
        <Center bg="#D6E3F8" py={1} px={4} borderRadius='2xl'>
            <Text fontSize="15px" fontWeight="semibold">{props.tag}</Text>
        </Center>
    );
}

export default ViewProfile;
