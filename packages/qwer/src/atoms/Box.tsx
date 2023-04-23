import { styled, Stack } from 'tamagui'
import { getElevation } from './utils/getElevation'

export const fullscreenStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
} as const

const variants = {
  fullscreen: {
    true: fullscreenStyle,
  },
  elevation: {
    '...size': getElevation,
  },
} as const

export const Box = styled(Stack, {
  name: 'Box',
  variants,
})
