import { styled } from '@tamagui/core'
import { Box } from '../Box'

export const Button = styled(Box, {
  p: '$medium',
  animation: 'fast',
  pressStyle: {
    scale: 0.2,
  },
})
