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

  //add picture emoji on right side of circle
const CreateProfile = () => {
    return (
        <Center>
            <Flex flexDirection='column' mb={10}>
                <Center><Circle w="130px" h="130px" bg='#FAF6F6' mt="81px"></Circle></Center>
                <Text fontWeight="bold" fontSize="25px" my={3}>Create Your Profile</Text>
                <FormControl px={10}>
                    <Input type='text' placeholder='Enter your name...' bg="#FAF6F6" mb={3}/>
                    <Input type='text' placeholder='Enter your pronouns...' bg="#FAF6F6" mb={3}/>
                    <Input type='text' placeholder='Enter your location...' bg="#FAF6F6" mb={3}/>
                    <Input type='link' placeholder='Enter your LinkedIn URL...' bg="#FAF6F6" mb={3}/>
                    <Textarea type='text' placeholder='Enter your bio...' bg="#FAF6F6" mb={3}/>
                    <Center mt={3} bg="#FAF6F6" py={4} borderRadius="lg">
                        <Flex flexDirection='column'>
                        <FormLabel>Choose tags that relate to you:</FormLabel>
                        <CheckboxGroup >
                            <VStack spacing='10px' align='left'>
                            <Checkbox>LGBTQ+</Checkbox>
                            <Checkbox>Visible Minority</Checkbox>
                            <Checkbox>High School Student</Checkbox>
                            <Checkbox>Post-Secondary Student</Checkbox>
                            <Checkbox>Working Professional</Checkbox>
                            <Checkbox>Immigrant</Checkbox>
                            </VStack>
                        </CheckboxGroup>
                        </Flex>
                    </Center>
                    <Button type='submit' mt={6} px={6} fontSize="20px" bg="#D6E3F8">Submit</Button>
                </FormControl>
            </Flex>
        </Center>
    );
}

export default CreateProfile;

