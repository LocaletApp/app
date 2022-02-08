import { Box, Heading, Image } from "@chakra-ui/react"

export const Tile = ({ price, imgUrl, title }) => {
  return (
    <Box position="relative">
      <Image src={imgUrl} alt={title} objectFit="contain" borderRadius="xl" />
      <Box
        p={2}
        display="inline-block"
        borderRadius="md"
        bg="background.secondary"
        position="absolute"
        bottom={4}
        right={4}
      >
        <Heading fontSize="20px">${price.toFixed(2)}</Heading>
      </Box>
    </Box>
  )
}
