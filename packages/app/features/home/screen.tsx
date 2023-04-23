import { Text, Stack, Box, Button, Sheet } from '@qwer/qwer'
import { useCallback, useState } from 'react'

export function HomeScreen() {
  const [position, setPosition] = useState(0)
  const [sheetOpen, setSheetOpen] = useState(false)
  const setOpen = useCallback(() => setSheetOpen(true), [])

  console.log('sheetOpen', sheetOpen)
  return (
    <Stack>
      <Box
        elevation="$12"
        p="$medium"
        bg="$blue.7"
        onPress={() => setSheetOpen((prev) => !prev)}
      >
        <Text>Test Box</Text>
      </Box>
      <Button animation="bouncy" size="$36">
        <Text color="$blue.0">Test Button</Text>
      </Button>
      <Text bg="$blue.3">Welcome to Solito.3</Text>
      <Sheet
        forceRemoveScrollEnabled={sheetOpen}
        modal
        open={sheetOpen}
        onOpenChange={setOpen}
        snapPoints={[85, 50, 25]}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="bouncy" // for the css driver
      >
        <Sheet.Overlay />
        <Sheet.Handle />
        <Sheet.Frame
          flex={1}
          justifyContent="center"
          alignItems="center"
          space="$medium"
        >
          <Box>Inside content</Box>
        </Sheet.Frame>
      </Sheet>
    </Stack>
  )
}
