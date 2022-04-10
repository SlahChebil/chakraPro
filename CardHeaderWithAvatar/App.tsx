import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

export const App = () => (
  <Box as="section" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
    <Container>
      <Box
        bg="bg-surface"
        px={{ base: '4', md: '6' }}
        py="5"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
      >
        <Stack spacing="4" direction={{ base: 'column', sm: 'row' }} justify="space-between">
          <HStack spacing="4">
            <Avatar
              src="https://tinyurl.com/yhkm2ek8"
              name="Christoph Winston"
              boxSize={{ base: '12', sm: '14' }}
            />
            <Box>
              <HStack>
                <Text fontSize="lg" fontWeight="medium">
                  Christoph Winston
                </Text>
                <Badge variant="subtle" colorScheme="blue">
                  Verified
                </Badge>
              </HStack>
              <Text color="muted" fontSize="sm">
                chris@chakra-ui.com
              </Text>
            </Box>
          </HStack>
          <Stack direction="row" spacing="3">
            <Button variant="secondary">Contact</Button>
            <Button variant="primary">Invite</Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  </Box>
)
