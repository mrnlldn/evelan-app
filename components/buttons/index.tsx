import React, { forwardRef } from 'react'
import { ButtonProps, Button } from '@chakra-ui/react'

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Button
        _hover={{
          filter: 'brightness(0.90)',
          transition: 'all 0.2s ease-in-out',
        }}
        _focus={{ border: 0, filter: 'brightness(0.90)' }}
        _active={{ filter: 'brightness(0.90)' }}
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
    )
  },
)

BaseButton.displayName = 'base-button'

export default BaseButton
