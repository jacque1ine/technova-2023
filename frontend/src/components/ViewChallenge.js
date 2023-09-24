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
    Spacer
  } from '@chakra-ui/react';
  import { Button, ButtonGroup } from '@chakra-ui/react';
  import { TimeIcon } from '@chakra-ui/icons'
  import { BiCoinStack } from 'react-icons/bi';
  import { MdPeople, MdPeopleOutline } from 'react-icons/md';
  import { ImCoinDollar } from 'react-icons/im';



const ViewChallenge = (props) => {

//add image!!
    return (
        <Box>
            <Text py={4} fontWeight="bold" fontSize="30px">{props.title}</Text>
            <Center>
                <Flex flexDirection="row" mb={3} w="275px">
                    <Box><Text>{props.owner}</Text></Box>
                    <Spacer/>
                    <Box><Flex flexDirection="row"><TimeIcon pt={2} boxSize={6}/><Text align="right">{props.timeleft}</Text></Flex></Box>
                </Flex>
            </Center>
            <Image/> 
            <Center>
                
                    {props.org == 'Company' ? 
                    (
                    <Flex flexDirection="row" mb={2} w="275px">
                    <Flex flexDirection="row" ><Box pt="6px" boxSize={6}><ImCoinDollar/></Box><Text>{props.bounty}</Text></Flex>
                    <Spacer/>
                    <Flex flexDirection="row" ><Box pt="6px" boxSize={6} ><MdPeople/></Box><Text>{props.pplcompleted}</Text></Flex>
                    <Spacer/>
                    <Flex flexDirection="row" ><Box pt="6px" boxSize={6}><BiCoinStack/></Box><Text>{props.coinval}</Text></Flex>
                    </Flex>
                    )
                    : 
                    (
                    <Flex flexDirection="row" mb={2} w="275px">
                    <Flex flexDirection="row" ><Box pt="6px" boxSize={6} ><MdPeople/></Box><Text>{props.pplcompleted}</Text></Flex>
                    <Spacer/>
                    <Flex flexDirection="row" ><Box pt="6px" boxSize={6}><BiCoinStack/></Box><Text>{props.coinval}</Text></Flex>
                    </Flex>
                    )
                    }
                                </Center>
            <Box bg='#D6E3F8' mx={10} borderRadius="lg" mb={3} py={2} w="275px">
                <Text fontSize="17px">{props.description}</Text>
            </Box>
            <Center h="100vh">
                {props.joined ?
                    <div>
                        <Button mr={2}>Leave</Button>
                        <Button ml={2}>Submit</Button>
                    </div> 
                    :
                    <div><Button>Join</Button></div>
                }
            </Center>
        </Box>
    );
}

export default ViewChallenge;
