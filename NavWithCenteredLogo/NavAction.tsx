import {
  Box,
  Center,
  Stack,
  Text,
  useColorModeValue as mode,
  useToken,
  VisuallyHidden,
} from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'
import * as React from 'react'

type NavActionProps = {
  href?: string
  label: string
  icon: React.ElementType
  isActive?: boolean
}

const MobileNavAction = (props: NavActionProps) => {
  const { label, icon, isActive, href } = props
  const blue500 = useToken('colors', 'blue.500')
  return (
    <Center
      as="a"
      href={href}
      height="3.5rem"
      rounded="4"
      aria-current={isActive ? 'page' : undefined}
      _activeLink={{
        bg: mode('blue.50', transparentize(blue500, 0.2)),
        color: mode('blue.600', 'blue.300'),
      }}
      _hover={{ bg: mode('gray.100', 'gray.700') }}
    >
      <Stack direction="column" align="center" as="button" spacing="0">
        <Box fontSize="xl" as={icon} />
        <Text fontSize="sm" fontWeight="medium">
          {label}
        </Text>
      </Stack>
    </Center>
  )
}

const DesktopNavAction = (props: NavActionProps) => {
  const { label, icon, isActive, href } = props
  return (
    <Center w="8" h="8" as="a" href={href} aria-current={isActive ? 'page' : undefined}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Box focusable="false" fontSize="xl" as={icon} color={mode('gray.600', 'gray.300')} />
    </Center>
  )
}

export const NavAction = {
  Mobile: MobileNavAction,
  Desktop: DesktopNavAction,
}
