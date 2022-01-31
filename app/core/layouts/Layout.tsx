import { BlitzLayout } from "blitz"
import { Head } from "app/core/layouts/meta/Head"
import { Box, Button, HStack, VStack } from "@chakra-ui/react"
import { Logo } from "../components/Logo"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head />

      <HStack boxSize="full" spacing={0}>
        <VStack h="full" align="start" p={4} minW="containers.sidebar">
          <Logo />
          <Button size="sm" variant="ghost">
            small ghost
          </Button>
          <Button size="lg" variant="filled">
            large filled
          </Button>
        </VStack>
        <Box boxSize="full" bg="background.primary" roundedLeft="xl">
          {children}
        </Box>
      </HStack>
    </>
  )
}

export default Layout
