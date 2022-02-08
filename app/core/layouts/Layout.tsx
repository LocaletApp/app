import { BlitzLayout } from "blitz"
import { Head } from "app/core/layouts/meta/Head"
import { Sidebar } from "../components/Sidebar"
import { Box, HStack } from "@chakra-ui/react"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head />

      <HStack boxSize="full" spacing={0}>
        <Sidebar />
        <Box boxSize="full" bg="background.primary" roundedLeft="xl">
          {children}
        </Box>
      </HStack>
    </>
  )
}

export default Layout
