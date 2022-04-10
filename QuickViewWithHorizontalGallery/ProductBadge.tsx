import { Badge, BadgeProps } from '@chakra-ui/react'
import * as React from 'react'

export const ProductBadge = (props: BadgeProps) => (
  <Badge
    alignSelf="start"
    textTransform="none"
    fontSize="sm"
    fontWeight="semibold"
    lineHeight="1rem"
    borderRadius="base"
    py="1"
    px="2"
    {...props}
  />
)
