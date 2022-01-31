import { BlitzPage, Image } from "blitz"
import Layout from "app/core/layouts/Layout"
import logo from "public/logo.png"
import { Box, Text } from "@chakra-ui/react"

const Home: BlitzPage = () => {
  return (
    <Box boxSize="full">
      <Box p={4} boxSize={24} bg="text.5"></Box>
    </Box>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
