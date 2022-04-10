import { Box, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { items } from './NavItemIcons'
import { NavAction } from './NavAction'

export const MobileBottomNav = () => (
  <Box
    bg={mode('white', 'gray.800')}
    pos="fixed"
    width="full"
    bottom="env(safe-area-inset-bottom)"
    borderTopWidth="1px"
    display={{ lg: 'none' }}
  >
    <SimpleGrid columns={4} padding="2">
      <NavAction.Mobile {...items.cart} isActive />
      <NavAction.Mobile {...items.search} />
      <NavAction.Mobile {...items.user} />
      <NavAction.Mobile {...items.wishlist} />
    </SimpleGrid>
  </Box>
)
