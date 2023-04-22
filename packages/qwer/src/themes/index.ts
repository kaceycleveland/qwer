import { type Variable, createTheme } from '@tamagui/core'

import { tokens } from '../tokens'

const lightTheme = {
  background: tokens.color['grey.1'].val,
  textColor: tokens.color['blue.5'].val,
} as const

const light = createTheme(lightTheme)

export const themes = {
  light,
}

export default themes
