import { BlitzPage, Image } from "blitz"
import Layout from "app/core/layouts/Layout"
import logo from "public/logo.png"
import { Box, Flex, Text } from "@chakra-ui/react"
import { Tile } from "app/core/components/Tile"

const Home: BlitzPage = () => {
  return (
    <Flex p={4} boxSize="full" gap={6}>
      {/* <Box p={4} boxSize={24} bg="text.5"></Box> */}
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </Flex>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
