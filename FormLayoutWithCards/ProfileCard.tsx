import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { Dropzone } from './Dropzone'

export const ProfileCard = (props: BoxProps) => (
  <Box
    bg="bg-surface"
    boxShadow={useColorModeValue('sm', 'sm-dark')}
    borderRadius="lg"
    flex="1"
    {...props}
  >
    <Stack spacing="5" px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }}>
      <FormControl id="website">
        <FormLabel>Website</FormLabel>
        <InputGroup>
          <InputLeftAddon>https://</InputLeftAddon>
          <Input defaultValue="www.chakra-ui.com" />
        </InputGroup>
      </FormControl>
      <FormControl id="bio">
        <FormLabel>Bio</FormLabel>
        <Textarea rows={3} resize="none" />
        <FormHelperText color="subtle">Write a short introduction about yourself</FormHelperText>
      </FormControl>
      <FormControl id="picture">
        <FormLabel>Picture</FormLabel>
        <Stack spacing={{ base: '3', md: '5' }} direction={{ base: 'column', sm: 'row' }}>
          <Avatar size="lg" name="Christoph Winston" src="https://tinyurl.com/yhkm2ek8" />
          <Dropzone width="full" />
        </Stack>
      </FormControl>
    </Stack>
    <Divider />
    <Flex direction="row-reverse" py="4" px={{ base: '4', md: '6' }}>
      <Button type="submit" variant="primary">
        Save
      </Button>
    </Flex>
  </Box>
)
