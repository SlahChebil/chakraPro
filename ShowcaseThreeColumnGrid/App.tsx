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
        <Heading size="lg">Season's Favorites</Heading>
        <HStack spacing={{ base: '2', md: '3' }}>
          <Link
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="bold"
            color={useColorModeValue('blue.500', 'blue.300')}
          >
            See all categories
          </Link>
          <Icon
            as={FaArrowRight}
            color={useColorModeValue('blue.500', 'blue.300')}
            fontSize={{ base: 'sm', md: 'md' }}
          />
        </HStack>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: '8', lg: '16' }}>
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </SimpleGrid>
    </Stack>
  </Box>
)
