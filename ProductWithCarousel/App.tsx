import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiClock, FiHeart } from 'react-icons/fi'
import { RiRulerLine } from 'react-icons/ri'
import { Gallery } from './Gallery'
import { Rating } from './Rating'
import { ColorPicker } from './ColorPicker'
import { PriceTag } from './PriceTag'
import { QuantityPicker } from './QuantityPicker'
import { SizePicker } from './SizePicker'
import { images } from './_data'

export const App = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack
        direction={{ base: 'column-reverse', lg: 'row' }}
        spacing={{ base: '6', lg: '12', xl: '16' }}
      >
        <Stack spacing={{ base: '6', lg: '8' }} maxW={{ lg: 'sm' }} justify="center">
          <Stack spacing={{ base: '3', md: '4' }}>
            <Stack spacing="3">
              <HStack alignSelf="baseline">
                <Rating defaultValue={4} size="sm" />
                <Link
                  href="#"
                  fontSize="sm"
                  fontWeight="medium"
                  color={useColorModeValue('gray.600', 'gray.400')}
                >
                  12 Reviews
                </Link>
              </HStack>
              <Heading size="lg" fontWeight="medium">
                Classic Black
              </Heading>
            </Stack>
            <PriceTag price={229} currency="GBP" rootProps={{ fontSize: 'xl' }} />
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              With a sleek design and a captivating essence, this is a modern Classic made for every
              occasion.
            </Text>
          </Stack>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '6', md: '8' }}>
            <Stack flex="1">
              <ColorPicker
                defaultValue="Black"
                options={[
                  { label: 'Black', value: '#000' },
                  { label: 'Dark Gray', value: '#666' },
                  { label: 'Light Gray', value: '#BBB' },
                ]}
              />
              <HStack spacing="1" color={useColorModeValue('gray.600', 'gray.400')}>
                <Icon as={FiClock} />
                <Text fontSize="xs" fontWeight="medium">
                  Low stock
                </Text>
              </HStack>
            </Stack>
            <Stack flex="1">
              <SizePicker
                defaultValue="32"
                options={[
                  { label: '32mm', value: '32' },
                  { label: '36mm', value: '36' },
                  { label: '40mm', value: '40' },
                ]}
              />
              <HStack spacing="1" color={useColorModeValue('gray.600', 'gray.400')}>
                <Icon as={RiRulerLine} />
                <Link href="#" fontSize="xs" fontWeight="medium" textDecoration="underline">
                  View our sizing guide
                </Link>
              </HStack>
            </Stack>
          </Stack>
          <HStack spacing={{ base: '4', md: '8' }} align="flex-end" justify="space-evenly">
            <Box flex="1">
              <QuantityPicker defaultValue={1} max={3} />
            </Box>
            <Box flex="1">
              <Button
                variant="outline"
                size="lg"
                fontSize="md"
                isFullWidth
                leftIcon={<Icon as={FiHeart} boxSize="4" />}
              >
                Favorite
              </Button>
            </Box>
          </HStack>
          <Button colorScheme="blue" size="lg">
            Add to cart
          </Button>
        </Stack>
        <Gallery rootProps={{ overflow: 'hidden', flex: '1' }} images={images.slice(0, 5)} />
      </Stack>
    </Box>
  )
}
