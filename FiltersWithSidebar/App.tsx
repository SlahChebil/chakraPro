import { Box, Grid, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { CheckboxFilter } from './CheckboxFilter'
import { ColorPicker } from './ColorPicker'
import { PriceRangePicker } from './PriceRangePicker'
import { ProductBreadcrumb } from './ProductBreadcrumb'
import { SizePicker } from './SizePicker'
import { SortbySelect } from './SortBySelect'
import { MobileFilter } from './MobileFilter'
import { blueFilters, breadcrumbData, colorFilter, genderFilter, sizeFilter } from './_data'

export const App = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <ProductBreadcrumb data={breadcrumbData} />
    <Box mt={{ base: '8', md: '16' }}>
      <Grid templateColumns={{ base: '1fr', md: '240px 1fr' }} gap="14">
        <Stack spacing="10" maxW="240px" display={{ base: 'none', md: 'flex' }}>
          <CheckboxFilter spacing="3" options={genderFilter.options} label="Gender" />
          <SizePicker {...sizeFilter} label="Size" />
          <ColorPicker {...colorFilter} label="Color" />
          <CheckboxFilter spacing="3" options={blueFilters.options} label="Brand" showSearch />
          <Stack spacing="5">
            <label>Price range</label>
            <PriceRangePicker defaultValue={[6, 40]} />
            <HStack spacing="6">
              <Input type="number" placeholder="$500" />
              <Input type="number" placeholder="$1,000" />
            </HStack>
          </Stack>
        </Stack>

        <Box width="full">
          <Stack
            spacing={{ base: '6', md: '4' }}
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="flex-start"
            width="full"
          >
            <Stack direction={{ base: 'column', md: 'row' }} align="baseline">
              <Heading size="md" fontSize="2xl">
                Watches
              </Heading>
              <Text color="gray.500">(300 products)</Text>
            </Stack>
            <MobileFilter />
            <HStack display={{ base: 'none', md: 'flex' }}>
              <Text flexShrink={0} color="gray.500" fontSize="sm">
                Sort by
              </Text>
              <SortbySelect />
            </HStack>
          </Stack>
          <Box mt="6" borderWidth="2px" minH="480px" rounded="xl" borderStyle="dashed"></Box>
        </Box>
      </Grid>
    </Box>
  </Box>
)
