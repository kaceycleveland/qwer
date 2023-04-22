import { Text, Stack, Box, Button } from '@qwer/qwer'

export function HomeScreen() {
  return (
    <Stack>
      <Box elevation="$12" p="$medium" bg="$blue.7">
        <Text>Test Box</Text>
      </Box>
      <Button>
        <Text>Test Button</Text>
      </Button>
      <Text bg="$blue.3">Welcome to Solito.3</Text>
    </Stack>
  )
}
