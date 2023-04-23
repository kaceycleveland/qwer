import { createTheme, TamaguiBaseTheme } from 'tamagui'

import { tokens } from '../tokens'

interface QwerTheme extends TamaguiBaseTheme {}

const lightTheme: QwerTheme = {
  background: tokens.color['blue.5'],
  backgroundHover: tokens.color['blue.5'],
  backgroundPress: tokens.color['blue.5'],
  backgroundFocus: tokens.color['blue.5'],
  color: tokens.color['blue.5'],
  colorHover: tokens.color['blue.5'],
  colorPress: tokens.color['blue.5'],
  colorFocus: tokens.color['blue.5'],
  borderColor: tokens.color['blue.5'],
  borderColorHover: tokens.color['blue.5'],
  borderColorPress: tokens.color['blue.5'],
  borderColorFocus: tokens.color['blue.5'],
  shadowColor: tokens.color['blue.5'],
  shadowColorHover: tokens.color['blue.5'],
  shadowColorPress: tokens.color['blue.5'],
  shadowColorFocus: tokens.color['blue.5'],
} as const

const light = createTheme(lightTheme)

export const themes = {
  light,
}

export default themes
