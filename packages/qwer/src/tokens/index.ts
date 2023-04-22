import { createTokens } from '@tamagui/core'

import { colors as color } from './colors'
import { radius } from './radius'
import { size } from './size'
import { space } from './space'
import { zIndex } from './z-index'

export { animations } from './animations'

export const tokens = createTokens({ color, radius, zIndex, space, size })
