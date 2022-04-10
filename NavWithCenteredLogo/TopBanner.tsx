import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

export const TopBanner = (props: BoxProps) => {
  return (
    <Box
      bg="blue.500"
      color="white"
      textAlign="center"
      py="2"
      fontSize="sm"
      fontWeight="medium"
      {...props}
    >
      Free shipping on all orders before 24th December 2021
    </Box>
  )
}
