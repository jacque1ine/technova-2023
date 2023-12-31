import {
    Box,
    Flex,
    Text,
    Center
  } from '@chakra-ui/react';
  import { Divider } from '@chakra-ui/react'



const ViewChallenges = (props) => {
    return (
        <Center>
            <Flex flexDirection='column'>
                <Challenge />
                <Text py={5} fontSize='23px' fontWeight='bold'>{props.category}</Text>
            </Flex>
        </Center>
    );
}

const Challenge = (props) => {
    return (
        <Center>
            <Flex flexDirection='column' p={4} w="330px">
                    <Flex w="323px" h="73.6" flexDirection='row'>
                        <Box bg='tomato' p={5} pl={2} h="50px" w="50px" borderRadius="lg"></Box>
                        <Flex flexDirection='column' mx={4} w="full">
                            <Flex flexDirection='row' justifyContent="space-between">
                            <Box align='left'>
                                <Text fontSize="16px" fontWeight="bold">{props.title}</Text>
                                <Text fontSize="13px">{props.timeleft}</Text>
                            </Box>
                            <Box pl={10} pt={1}>
                                <Text fontSize="13px">{props.coins} coins</Text>
                            </Box>
                            </Flex>
                            <Divider axis="horizontal" pt={5}/>
                        </Flex>
                    </Flex>
            </Flex>
        </Center>
        
    );
}

export default ViewChallenges;
