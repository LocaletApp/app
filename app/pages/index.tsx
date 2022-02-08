import { BlitzPage, Image } from "blitz"
import Layout from "app/core/layouts/Layout"
import logo from "public/logo.png"
import { Box, Flex, HStack, Text } from "@chakra-ui/react"
import { Tile } from "app/core/components/Tile"

const Home: BlitzPage = () => {
  return (
    <HStack p={4} boxSize="full" gap={6}>
      <Tile price={20.5} imgUrl="https://i.imgur.com/TDcGOhX.jpg" title="balls" />
      <Tile price={20.5} imgUrl="https://i.imgur.com/TDcGOhX.jpg" title="balls" />
      <Tile price={20.5} imgUrl="https://i.imgur.com/TDcGOhX.jpg" title="balls" />
    </HStack>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
