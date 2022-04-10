import { Select, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const CurrencySelect = () => (
  <Select
    border="0"
    color={useColorModeValue('gray.600', 'gray.300')}
    focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
    fontWeight="medium"
    fontSize="sm"
    aria-label="Select Currency"
  >
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
    <option value="AED">AED</option>
  </Select>
)
