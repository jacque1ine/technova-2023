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
    Image
  } from '@chakra-ui/react';
  import { Button, ButtonGroup } from '@chakra-ui/react';
  import { TimeIcon } from '@chakra-ui/icons'
  import { extendTheme } from '@chakra-ui/react' //fix font later


const ViewChallenge = (props) => {


    const handleJoin = () => {

    }

    const handleLeave = () => {
        
    }

//add image!!
    return (
        <Box>
            <Text py={4} fontWeight="bold" fontSize="30px">{props.title}</Text>
            <Center>
                <Flex flexDirection="row" mb={3}>
                    <Text mr={16} align="left">{props.owner}</Text>
                    <Box px={1}></Box>
                    <Flex flexDirection="row" ml={16} ><TimeIcon pt={2} boxSize={6}/><Text align="right">{props.timeleft}</Text></Flex>
                </Flex>
            </Center>
            <Image/> 
            <Center>
                <Flex flexDirection="row" mb={2}>
                    <Flex flexDirection="row" ml={20} ><TimeIcon pt={2} boxSize={6}/><Text>{props.bounty}</Text></Flex>
                    <Flex flexDirection="row" mx={20} ><TimeIcon pt={2} boxSize={6}/><Text>{props.pplcompleted}</Text></Flex>
                    <Flex flexDirection="row" mr={20} ><TimeIcon pt={2} boxSize={6}/><Text>{props.coinval}</Text></Flex>
                </Flex>
            </Center>
            <Box bg='#D6E3F8' mx={10} borderRadius="lg" mb={3} py={2}>
                <Text fontSize="17px">{props.description}</Text>
            </Box>
            <Center h="100vh">
                {props.joined ?
                    <div>
                        <Button>Leave</Button>
                        <Button>Submit</Button>
                    </div> 
                    :
                    <div><Button>Join</Button></div>
                }
            </Center>
        </Box>
    );
}

export default ViewChallenge;
