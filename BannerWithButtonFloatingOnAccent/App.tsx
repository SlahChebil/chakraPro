import {
  Box,
  Button,
  CloseButton,
  Container,
  Icon,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiInfo } from 'react-icons/fi'

export const App = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Container as="section" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
      <Box
        bg="bg-accent"
        color="on-accent"
        px={{ base: '4', md: '3' }}
        py={{ base: '4', md: '2.5' }}
        position="relative"
        borderRadius="xl"
      >
        <CloseButton display={{ sm: 'none' }} position="absolute" right="2" top="2" />
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          spacing={{ base: '3', md: '2' }}
          pb="0.5"
        >
          <Stack
            spacing="4"
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'start', md: 'center' }}
          >
            {!isMobile && (
              <Square size="12" bg="bg-accent-subtle" borderRadius="md">
                <Icon as={FiInfo} boxSize="6" />
              </Square>
            )}
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: '0.5', md: '1.5' }}
              pe={{ base: '4', sm: '0' }}
            >
              <Text fontWeight="medium">We just launched our new product.</Text>
              <Text color="on-accent-muted">Read our press release</Text>
            </Stack>
          </Stack>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={{ base: '3', sm: '2' }}
            align={{ base: 'stretch', sm: 'center' }}
          >
            <Button variant="primary-on-accent" isFullWidth>
              Read more
            </Button>
            <CloseButton display={{ base: 'none', sm: 'inline-flex' }} />
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}
