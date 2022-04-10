import {
  FormControl,
  FormControlProps,
  FormLabel,
  HStack,
  useRadioGroup,
  UseRadioGroupProps,
} from '@chakra-ui/react'
import * as React from 'react'
import { SizePickerButton } from './SizePickerButton'

interface Option {
  label: string
  value: string
}

interface SizePickerProps extends UseRadioGroupProps {
  options: Option[]
  rootProps?: FormControlProps
  hideLabel?: boolean
  label?: string
}

export const SizePicker = (props: SizePickerProps) => {
  const { options, rootProps, hideLabel, label, ...rest } = props
  const { getRadioProps, getRootProps, value } = useRadioGroup(rest)
  const selectedOption = options.find((option) => option.value == value)

  return (
    <FormControl {...rootProps}>
      {!hideLabel && (
        <FormLabel fontSize="sm" fontWeight="medium">
          {label ?? `Size: ${selectedOption?.label}`}
        </FormLabel>
      )}
      <HStack {...getRootProps()}>
        {options.map((option) => (
          <SizePickerButton
            key={option.value}
            label={option.label}
            {...getRadioProps({ value: option.value })}
          />
        ))}
      </HStack>
    </FormControl>
  )
}
