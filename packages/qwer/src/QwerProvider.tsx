import { TamaguiProvider, TamaguiProviderProps } from '@tamagui/core'

import { qwerThemeConfig } from './config'

interface QwerProviderProps extends Omit<TamaguiProviderProps, 'config'> {
  overrides?: Partial<TamaguiProviderProps['config']>
}

export const QwerProvider = ({ ...props }: QwerProviderProps) => (
  <TamaguiProvider {...props} config={qwerThemeConfig} defaultTheme="light" />
)
