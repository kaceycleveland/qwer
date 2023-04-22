import { createParam } from 'solito'
import { TextLink } from 'solito/link'

import { Stack, Text } from '@qwer/qwer'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <Stack>
      <Text>{`User ID: ${id}`}</Text>

      <TextLink href="/">👈 Go Home</TextLink>
    </Stack>
  )
}
