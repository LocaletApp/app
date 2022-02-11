import { Heading, HStack, useToken } from "@chakra-ui/react"
import { MotionButton, transitionFastConfig } from "./MotionBox"

export const SidebarMenuItem = ({ title, icon }) => {
  const bgHoverColor = useToken("colors", "ui.10")

  return (
    <MotionButton
      w="full"
      color="ui.60"
      variant="ghostNoHover"
      whileHover={{ backgroundColor: bgHoverColor }}
      whileFocus={{ backgroundColor: bgHoverColor }}
      transition={transitionFastConfig}
    >
      <HStack spacing={8} p={4} w="full" justifyContent="start">
        {icon}
        <Heading color="inherit">{title}</Heading>
      </HStack>
    </MotionButton>
  )
}
