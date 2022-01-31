import { Box, Heading, Image } from "@chakra-ui/react"

export const Tile = () => {
  return (
    <Box boxSize="292px" position="relative">
      <Image src="tile-default.png" alt="tile-thumbnail" borderRadius={16} />
      <Box
        p={2}
        display="inline-block"
        borderRadius="md"
        bg="background.secondary"
        position="absolute"
        bottom={4}
        right={4}
      >
        <Heading fontSize="20px">$1500</Heading>
      </Box>
    </Box>
  )
}
