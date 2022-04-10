import { Box, Image, Text } from '@chakra-ui/react'
import * as React from 'react'

type NavProductItemProps = {
  imageUrl: string
  name: string
  price: number
  currency: string
  href: string
}

export const NavProductItem = (props: NavProductItemProps) => {
  const { imageUrl, name, price, currency, href } = props
  return (
    <Box as="a" href={href} width="full">
      <Image
        fit="cover"
        width="full"
        src={imageUrl}
        alt={name}
        height={{ base: '7.5rem', lg: '12.5rem' }}
        rounded="lg"
      />
      <Box mt="2">
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="sm" fontWeight="semibold">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price)}
        </Text>
      </Box>
    </Box>
  )
}
