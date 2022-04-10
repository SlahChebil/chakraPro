import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  StackProps,
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
import { ProductBadge } from './ProductBadge'
import { QuantityPicker } from './QuantityPicker'
import { SizePicker } from './SizePicker'
import { Product } from './_data'

interface ProductQuickShopProps {
  product: Product
  rootProps?: StackProps
}

export const ProductQuickShop = (props: ProductQuickShopProps) => {
  const { product, rootProps } = props
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={{ base: '8', lg: '16' }}
      {...rootProps}
    >
      <Box flex="1">
        <Gallery images={product.images} />
      </Box>
      <Box flex="1">
        <Stack spacing={{ base: '4', md: '8' }}>
          <Stack spacing={{ base: '2', md: '4' }}>
            <Stack spacing="3">
              <ProductBadge bg="red.500" color="white">
                On Sale
              </ProductBadge>
            </Stack>
            <Heading size="lg" fontWeight="medium">
              {product.name}
            </Heading>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing="1"
              align="baseline"
              justify="space-between"
            >
              <PriceTag
                price={product.price}
                salePrice={product.salePrice}
                currency={product.currency}
                rootProps={{ fontSize: 'xl' }}
              />
              <HStack spacing="2" alignSelf="baseline">
                <Rating defaultValue={product.rating} size="sm" />
                <Link
                  href="#"
                  fontSize="sm"
                  fontWeight="medium"
                  color={useColorModeValue('gray.600', 'gray.400')}
                >
                  {product.ratingCount} Reviews
                </Link>
              </HStack>
            </Stack>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>{product.description}</Text>
          </Stack>
          <Stack spacing={{ base: '4', md: '8' }} direction={{ base: 'column', md: 'row' }}>
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
              <QuantityPicker defaultValue={1} max={5} />
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
          <Stack spacing="3">
            <Button colorScheme="blue" size="lg">
              Add to cart
            </Button>
            <Link textAlign="center">View full details</Link>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}
