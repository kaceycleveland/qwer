import { createFont, createTamagui } from 'tamagui'
import { createMedia } from '@tamagui/react-native-media-driver'
import { shorthands } from '@tamagui/shorthands'

import { themes } from './themes'
import { tokens, animations } from './tokens'
import { size } from './tokens/size'

// TODO Style out the fonts

const interFont = createFont({
  family: 'Inter, Helvetica, Arial, sans-serif',
  size,
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,
    // ...
  },
  weight: {
    4: '300',
    6: '600',
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },

  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    700: { normal: 'InterBold', italic: 'InterBold-Italic' },
    800: { normal: 'InterBold', italic: 'InterBold-Italic' },
    900: { normal: 'InterBold', italic: 'InterBold-Italic' },
  },
})
export const qwerThemeConfig = createTamagui({
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    heading: interFont,
    body: interFont,
  },
  themes,
  tokens,
  animations,
  components: [],
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})

export type AppConfig = typeof qwerThemeConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
