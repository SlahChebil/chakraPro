import { Accordion, Box, SimpleGrid, Stack, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { NavAccordionItem } from './NavAccordionItem'
import { NavProductItem } from './NavProductItem'
import { SubNavLinkGroup } from './SubNavLinkGroup'
import { data } from './_data'

const DesktopNavMenu = () => {
  return (
    <Box
      px="10"
      pt="6"
      pb="16"
      bg={mode('white', 'gray.800')}
      display={{ base: 'none', lg: 'block' }}
    >
      <Box maxWidth="8xl" mx="auto">
        <Stack direction="row" spacing="5vw" justify="space-between">
          <Stack direction="row" spacing="5vw" flexShrink={0}>
            <SubNavLinkGroup {...data.category} />
            <SubNavLinkGroup {...data.featured} />
          </Stack>
          <SimpleGrid
            spacing="6"
            columns={{ base: 2, lg: 4 }}
            alignContent="flex-start"
            width="full"
            maxW={{ base: '400px', lg: '780px' }}
          >
            {data.products.map((product) => (
              <NavProductItem key={product.id} href="#" {...product} />
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  )
}

const MobileNavMenu = () => (
  <Accordion as={Stack} spacing="4" pt="6" index={0} overflow="auto" display={{ lg: 'none' }}>
    <NavAccordionItem label="Best Seller">
      <Stack direction="row" pt="5">
        {data.products.slice(0, 3).map((product) => (
          <NavProductItem key={product.id} href="#" {...product} />
        ))}
      </Stack>
      <Box mt="8">
        <SubNavLinkGroup {...data.category} />
      </Box>
    </NavAccordionItem>
    <NavAccordionItem label="Products">Products</NavAccordionItem>
    <NavAccordionItem label="New">New</NavAccordionItem>
    <NavAccordionItem label="Sale">Sale</NavAccordionItem>
  </Accordion>
)

export const NavMenu = {
  Desktop: DesktopNavMenu,
  Mobile: MobileNavMenu,
}
