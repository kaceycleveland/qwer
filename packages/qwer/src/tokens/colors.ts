const red = [
  'hsl(0, 80%, 94%)',
  'hsl(0, 80%, 90%)',
  'hsl(0, 80%, 86%)',
  'hsl(0, 80%, 77%)',
  'hsl(0, 80%, 68%)',
  'hsl(0, 80%, 59%)',
  'hsl(0, 80%, 50%)',
  'hsl(0, 80%, 41%)',
  'hsl(0, 80%, 32%)',
  'hsl(0, 80%, 23%)',
]

const grape = [
  'hsl(288, 80%, 94%)',
  'hsl(288, 80%, 90%)',
  'hsl(288, 80%, 86%)',
  'hsl(288, 80%, 77%)',
  'hsl(288, 80%, 68%)',
  'hsl(288, 80%, 59%)',
  'hsl(288, 80%, 50%)',
  'hsl(288, 80%, 41%)',
  'hsl(288, 80%, 32%)',
  'hsl(288, 80%, 23%)',
]

const blue = [
  'hsl(208, 80%, 94%)',
  'hsl(208, 80%, 90%)',
  'hsl(208, 80%, 86%)',
  'hsl(208, 80%, 77%)',
  'hsl(208, 80%, 68%)',
  'hsl(208, 80%, 59%)',
  'hsl(208, 80%, 50%)',
  'hsl(208, 80%, 41%)',
  'hsl(208, 80%, 32%)',
  'hsl(208, 80%, 23%)',
]

const green = [
  'hsl(131, 80%, 94%)',
  'hsl(131, 80%, 90%)',
  'hsl(131, 80%, 86%)',
  'hsl(131, 80%, 77%)',
  'hsl(131, 80%, 68%)',
  'hsl(131, 80%, 59%)',
  'hsl(131, 80%, 50%)',
  'hsl(131, 80%, 41%)',
  'hsl(131, 80%, 32%)',
  'hsl(131, 80%, 23%)',
]

const yellow = [
  'hsl(39, 80%, 94%)',
  'hsl(39, 80%, 90%)',
  'hsl(39, 80%, 86%)',
  'hsl(39, 80%, 77%)',
  'hsl(39, 80%, 68%)',
  'hsl(39, 80%, 59%)',
  'hsl(39, 80%, 50%)',
  'hsl(39, 80%, 41%)',
  'hsl(39, 80%, 32%)',
  'hsl(39, 80%, 23%)',
]

const orange = [
  'hsl(24, 80%, 94%)',
  'hsl(24, 80%, 90%)',
  'hsl(24, 80%, 86%)',
  'hsl(24, 80%, 77%)',
  'hsl(24, 80%, 68%)',
  'hsl(24, 80%, 59%)',
  'hsl(24, 80%, 50%)',
  'hsl(24, 80%, 41%)',
  'hsl(24, 80%, 32%)',
  'hsl(24, 80%, 23%)',
]

const grey = [
  'hsl(0, 0%, 94%)',
  'hsl(0, 0%, 90%)',
  'hsl(0, 0%, 86%)',
  'hsl(0, 0%, 77%)',
  'hsl(0, 0%, 68%)',
  'hsl(0, 0%, 59%)',
  'hsl(0, 0%, 50%)',
  'hsl(0, 0%, 41%)',
  'hsl(0, 0%, 32%)',
  'hsl(0, 0%, 23%)',
]

const aggregatedColors = {
  red,
  grape,
  blue,
  green,
  yellow,
  orange,
  grey,
} as const

type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Color = Array<keyof typeof aggregatedColors>[number]
type ColorPermutation<T extends Level, P extends Color> = P extends any
  ? `${P}.${T}`
  : never
type Leaves<T, L0 = T[keyof T]> = L0 extends Record<string, any>
  ? Leaves<L0>
  : L0

type ColorMap = { [x in ColorPermutation<Level, Color>]: string }

export const colors = Object.keys(aggregatedColors).reduce(
  (obj, paletteKey) => {
    const paletteFields = aggregatedColors[paletteKey as Color].reduce(
      (paletteObj, colorValue, index) => {
        return {
          [`${paletteKey}.${index}`]: colorValue,
          ...paletteObj,
        }
      },
      {}
    )
    return {
      ...paletteFields,
      ...obj,
    }
  },
  {} as ColorMap
)
