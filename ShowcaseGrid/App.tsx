import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { CategoryCard } from './CatetgoryCard'
import { categories } from './_data'

export const App = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <Stack spacing={{ base: '6', md: '8', lg: '12' }}>
      <Flex
        justify="space-between"
        align={{ base: 'start', md: 'center' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Heading size="lg" mb={{ base: '3', md: '0' }}>
          Shop by Categories
        </Heading>
        <HStack spacing={{ base: '2', md: '3' }}>
          <Link fontWeight="semibold" color={useColorModeValue('blue.500', 'blue.300')}>
            See all categories
          </Link>
          <Icon
            as={FaArrowRight}
            color={useColorModeValue('blue.500', 'blue.300')}
            fontSize={{ base: 'sm', md: 'md' }}
          />
        </HStack>
      </Flex>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={{ base: '4', md: '6', lg: '8' }}>
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </SimpleGrid>
    </Stack>
  </Box>
)
