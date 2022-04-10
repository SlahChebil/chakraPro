import { Box, Button, Icon, LightMode, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { Timer } from './Timer'

export const App = () => (
  <Box as="section" pt="8" pb="12">
    <Box bg={useColorModeValue('black', 'gray.700')} color="white" position="relative">
      <Box maxW="7xl" mx="auto" px={{ base: '4', md: '8', lg: '12' }} py={{ base: '3', md: '2.5' }}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="center"
          spacing={{ base: '2', md: '20', lg: '7.5rem' }}
        >
          <Text fontWeight="medium" fontSize="xl">
            20% OFF sale ends
          </Text>
          <Timer />
          <LightMode>
            <Button
              bg="white"
              color="black"
              px="12"
              display={{ base: 'none', md: 'inline-block' }}
              _focus={{ boxShadow: 'none' }}
              _focusVisible={{ boxShadow: 'outline' }}
            >
              Shop now
            </Button>
          </LightMode>
          <Box
            as="button"
            aria-label="Close banner"
            position="absolute"
            right={{ base: '2', md: '4', lg: '6' }}
            top={{ base: '0', md: 'unset' }}
          >
            <Icon as={VscChromeClose} boxSize={{ base: '5', md: '6' }} />
          </Box>
        </Stack>
      </Box>
    </Box>
  </Box>
)
