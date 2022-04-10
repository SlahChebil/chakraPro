import { Box, Container, Stack, StackDivider, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Stat } from './Stat'

const stats = [
  { label: 'Total Subscribers', value: '71,887', delta: { value: '321', isUpwardsTrend: true } },
  { label: 'Avg. Open Rate', value: '56.87%', delta: { value: '2.3%', isUpwardsTrend: true } },
  { label: 'Avg. Click Rate', value: '12.87%', delta: { value: '0.1%', isUpwardsTrend: false } },
]

export const App = () => (
  <Box as="section" py={{ base: '4', md: '8' }}>
    <Container>
      <Box bg="bg-surface" borderRadius="lg" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Stack direction={{ base: 'column', md: 'row' }} divider={<StackDivider />} spacing="0">
          {stats.map((stat, id) => (
            <Stat key={id} flex="1" {...stat} />
          ))}
        </Stack>
      </Box>
    </Container>
  </Box>
)
