import { Box, Container, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { steps } from './data'
import { Step } from './Step'
import { useStep } from './useStep'

export const App = () => {
  const [currentStep, { setStep }] = useStep({ maxStep: steps.length, initialStep: 2 })
  return (
    <Box bg="bg-surface">
      <Container py={{ base: '4', md: '8' }}>
        <Stack spacing="0" direction={{ base: 'column', md: 'row' }}>
          {steps.map((step, id) => (
            <Step
              key={id}
              cursor="pointer"
              onClick={() => setStep(id)}
              title={step.title}
              description={step.description}
              isActive={currentStep === id}
              isCompleted={currentStep > id}
              isFirstStep={id === 0}
              isLastStep={steps.length === id + 1}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
