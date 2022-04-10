import { Box, Container, FormControl, FormLabel, HStack, Icon, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FiMonitor, FiMoon, FiSun } from 'react-icons/fi'
import { CustomSelect } from './CustomSelect'
import { Option } from './Option'

/**
 * Please note - this component uses Downshift as a dependency. This must be installed additionally using `yarn add downshift`
 */
export const App = () => {
  const [colorMode, setColorMode] = React.useState<string | null | undefined>()

  return (
    <Box as="section" bg="bg-surface" pt={{ base: '4', md: '8' }} pb="40">
      <Container maxW="lg">
        <FormControl id="colormode">
          <FormLabel>ColorMode</FormLabel>
          <CustomSelect
            name="ColorMode"
            colorScheme="blue"
            value={colorMode}
            onChange={setColorMode}
            placeholder="Select a color mode"
          >
            <Option value="light">
              <HStack>
                <Icon as={FiSun} />
                <Text>Light</Text>
              </HStack>
            </Option>
            <Option value="dark">
              <HStack>
                <Icon as={FiMoon} />
                <Text>Dark</Text>
              </HStack>
            </Option>
            <Option value="system">
              <HStack>
                <Icon as={FiMonitor} />
                <Text>System</Text>
              </HStack>
            </Option>
          </CustomSelect>
        </FormControl>
      </Container>
    </Box>
  )
}
