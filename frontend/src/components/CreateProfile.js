import axios from "axios";
import { useForm } from "react-hook-form";
import {
    Text,
    VStack,
    Flex,
    Center,
    Circle,
    FormControl,
    Input,
    FormLabel,
    Textarea,
    Checkbox,
    CheckboxGroup,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

// add picture emoji on right side of circle
const CreateProfile = () => {
    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = async(data) => {
        // const response = await axios.post("http://localhost:3001/create-profile/:userId", {
        //   name: data.name,
        //   pronouns: data.pronouncs,
        //   location: data.location,
        //   bio: data.bio,
        //   linkedin: data.linkedin,
        //   tags: null,
        //   picture: null
        // });
        // console.log(response.data);
        console.log(data);
    }

    return (
        <Center>
            <Flex flexDirection="column" mb={10}>
                <Center>
                    <Circle w="130px" h="130px" bg="#FAF6F6" mt="81px"></Circle>
                </Center>
                <Text fontWeight="bold" fontSize="25px" my={3} align="center">
                    Create Your Profile
                </Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl px={10}>
                        <Input
                            {...register('name')}
                            type="text"
                            placeholder="Enter your name..."
                            bg="#FAF6F6"
                            mb={3}
                        />
                        <Input
                            {...register('pronouns')}
                            type="text"
                            placeholder="Enter your pronouns..."
                            bg="#FAF6F6"
                            mb={3}
                        />
                        <Input
                            {...register('location')}
                            type="text"
                            placeholder="Enter your location..."
                            bg="#FAF6F6"
                            mb={3}
                        />
                        <Input
                            {...register('linkedin')}
                            type="link"
                            placeholder="Enter your LinkedIn URL..."
                            bg="#FAF6F6"
                            mb={3}
                        />
                        <Textarea
                            {...register('bio')}
                            type="text"
                            placeholder="Enter your bio..."
                            bg="#FAF6F6"
                            mb={3}
                        />
                        <Center mt={3} bg="#FAF6F6" py={4} borderRadius="lg">
                            <Flex flexDirection="column">
                                <FormLabel>Choose tags that relate to you:</FormLabel>
                                <CheckboxGroup {...register('tags')}>
                                    <VStack spacing="10px" align="left">
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
                        <Center>
                            <Button type="submit" mt={6} px={6} fontSize="20px" bg="#D6E3F8">
                                Submit
                            </Button>
                        </Center>
                    </FormControl>
                </form>
            </Flex>
        </Center>
    );
};

export default CreateProfile;
