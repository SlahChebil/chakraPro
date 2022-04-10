import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react'
import * as React from 'react'
import { products } from './_data'
import { ProductQuickShop } from './ProductQuickShop'

export const App = () => (
  <Box height="100vh">
    {/*`trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly. */}
    <Modal
      isOpen={true}
      onClose={console.log}
      size="6xl"
      blockScrollOnMount={false}
      trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent
        borderRadius="none"
        mx={{ base: '2.5', lg: '16' }}
        my={{ base: '2.5', md: '16' }}
      >
        <ModalCloseButton top="3" right="5" size="lg" />
        <ModalBody px={{ base: '5', lg: '16' }} pt="16" pb={{ base: '10', lg: '16' }}>
          <ProductQuickShop product={products[0]} />
        </ModalBody>
      </ModalContent>
    </Modal>
  </Box>
)
