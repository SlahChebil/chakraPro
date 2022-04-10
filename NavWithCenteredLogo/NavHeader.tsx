import {
  Box,
  Center,
  Flex,
  HStack,
  Link,
  useColorModeValue as mode,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { MdMenu, MdSearch } from 'react-icons/md'
import { CurrencySelect } from './CurrencySelect'
import { Logo } from './Logo'
import { items } from './NavItemIcons'
import { NavAction } from './NavAction'

const DesktopNavHeader = () => (
  <Box py="6" bg={mode('white', 'gray.800')} px="10" display={{ base: 'none', lg: 'block' }}>
    <Flex justify="space-between" align="center" maxWidth="8xl" mx="auto">
      <HStack
        role="navigation"
        aria-label="Main navigation"
        spacing="10"
        fontWeight="semibold"
        fontSize="sm"
      >
        <Link href="#">Best Sellers</Link>
        <Link href="#" color={mode('blue.500', 'blue.200')}>
          Products
        </Link>
        <Link href="#">New</Link>
        <Link href="#">Sale</Link>
      </HStack>
      <a href="#" rel="home" aria-label="Go to Store Homepage">
        <Logo h="4" />
      </a>
      <HStack spacing="4">
        <CurrencySelect />
        <HStack spacing="4">
          <NavAction.Desktop {...items.search} />
          <NavAction.Desktop {...items.wishlist} />
          <NavAction.Desktop {...items.user} />
          <NavAction.Desktop {...items.cart} />
        </HStack>
      </HStack>
    </Flex>
  </Box>
)

const MobileNavHeader = (props: { onClickMenu?: VoidFunction; onClickSearch?: VoidFunction }) => {
  const { onClickMenu, onClickSearch } = props
  return (
    <Flex
      px="4"
      py="4"
      align="center"
      justify="space-between"
      display={{ base: 'flex', lg: 'none' }}
    >
      <HStack spacing="3">
        <Center w="8" h="8" as="button" type="button" onClick={onClickMenu}>
          <VisuallyHidden>Toggle Menu</VisuallyHidden>
          <Box as={MdMenu} fontSize="3xl" />
        </Center>
        <Logo h="4" />
      </HStack>
      <HStack>
        <CurrencySelect />
        <Center w="8" h="8" flexShrink={0} as="button" type="button" onClick={onClickSearch}>
          <VisuallyHidden>Search Store</VisuallyHidden>
          <Box as={MdSearch} fontSize="2xl" />
        </Center>
      </HStack>
    </Flex>
  )
}

export const NavHeader = {
  Desktop: DesktopNavHeader,
  Mobile: MobileNavHeader,
}
