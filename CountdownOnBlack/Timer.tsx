import { Box, HStack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { useTimer } from './useTimer'

const expiresInSeconds = new Date().getTime() + 141690000

export const Timer = () => {
  const { seconds, minutes, hours, days } = useTimer({
    expiresInSeconds,
  })

  return (
    <HStack spacing="4">
      <TimeUnit value={days} label="Days" />
      <TimeUnit value={hours} label="Hours" />
      <TimeUnit value={minutes} label="Minutes" />
      <TimeUnit value={seconds} label="Seconds" />
    </HStack>
  )
}

interface Props {
  value: number
  label: string
}

const TimeUnit = (props: Props) => {
  const { value, label } = props
  return (
    <Box textAlign="center">
      <Text fontWeight="semibold" fontSize={{ base: 'xl', md: '2xl' }} lineHeight="1">
        {value.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
      </Text>
      <Text fontSize="xs" color="gray.400">
        {label}
      </Text>
    </Box>
  )
}
