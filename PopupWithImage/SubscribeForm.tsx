import { Button, FormControl, FormLabel, Input, Stack, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const SubscribeForm = () => (
  <Stack as="form" spacing="4">
    <FormControl id="email">
      <FormLabel srOnly>Enter your email</FormLabel>
      <Input
        type="email"
        placeholder="Enter your email"
        size="lg"
        fontSize="md"
        focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      />
    </FormControl>
    <Button type="submit" colorScheme="blue" size="lg">
      Join now
    </Button>
  </Stack>
)
