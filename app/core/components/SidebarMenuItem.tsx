import { Button, Heading } from "@chakra-ui/react"

export const SidebarMenuItem = ({ title, icon }) => {
  return (
    <Button
      w="full"
      justifyContent="start"
      p={4}
      size="md"
      variant="ghost"
      color="ui.60"
      leftIcon={icon}
      iconSpacing={8}
    >
      <Heading color="inherit">{title}</Heading>
    </Button>
  )
}
