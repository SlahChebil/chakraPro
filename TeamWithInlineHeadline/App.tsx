import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { members } from './data'

export const App = () => (
  <Box bg="bg-surface">
    <Container py={{ base: '16', md: '24' }}>
      <Stack spacing={{ base: '12', xl: '24' }} direction={{ base: 'column', lg: 'row' }}>
        <Stack spacing="10">
          <Stack spacing="3" maxW="sm" width="full">
            <Text fontSize={{ base: 'sm', md: 'md' }} color="accent" fontWeight="semibold">
              We're hiring
            </Text>
            <Stack spacing={{ base: '4', md: '5' }}>
              <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>Meet our team</Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted" maxW="3xl">
                Jelly brownie candy dessert lemon drops marshmallow pastry.
              </Text>
            </Stack>
          </Stack>
          <Stack spacing="3" direction={{ base: 'column-reverse', md: 'row' }}>
            <Button variant="secondary" size="lg">
              Contact us
            </Button>
            <Button variant="primary" size="lg">
              Join our team
            </Button>
          </Stack>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          columnGap="8"
          rowGap={{ base: '10', lg: '12' }}
          flex="1"
        >
          {members.map((member) => (
            <Stack key={member.name} spacing={{ base: '4', md: '5' }} direction="row">
              <Avatar src={member.image} boxSize={{ base: '16', md: '20' }} />
              <Stack spacing="4">
                <Stack>
                  <Box>
                    <Text fontWeight="medium" fontSize="lg">
                      {member.name}
                    </Text>
                    <Text color="accent">{member.role}</Text>
                  </Box>
                  <Text color="muted">{member.description}</Text>
                </Stack>
                <HStack spacing="4" color="subtle">
                  {[FaGithub, FaLinkedin, FaTwitter].map((item, id) => (
                    <Link href="#" key={id}>
                      <Icon as={item} boxSize="5" />
                    </Link>
                  ))}
                </HStack>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
)
