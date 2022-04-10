import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { PopoverIcon } from '../PopoverIcon'
import { Logo } from './Logo'
import { ResourcesSubmenu } from './ResourcesSubmenu'

export const App = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { onToggle, isOpen } = useDisclosure({ defaultIsOpen: true })
  return (
    <Box as="section" minH="md">
      <Box as="nav" bg="bg-surface">
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  <Button>Product</Button>
                  <Button>Pricing</Button>
                  <Button
                    variant="link"
                    rightIcon={<PopoverIcon isOpen={isOpen} />}
                    onClick={onToggle}
                  >
                    Resources
                  </Button>
                  <Button>Support</Button>
                </ButtonGroup>
                <HStack spacing="3">
                  <Button variant="ghost">Sign in</Button>
                  <Button variant="primary">Sign up</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
        <Divider />
        <ResourcesSubmenu isOpen={isDesktop && isOpen} />
      </Box>
    </Box>
  )
}
