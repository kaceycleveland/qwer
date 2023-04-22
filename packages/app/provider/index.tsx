import { NavigationProvider } from './navigation'
import { QwerProvider } from '@qwer/qwer'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <QwerProvider>{children}</QwerProvider>
    </NavigationProvider>
  )
}
