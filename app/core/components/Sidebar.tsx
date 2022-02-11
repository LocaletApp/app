import { Box, Button, Heading, HStack, Image, VStack } from "@chakra-ui/react"
import { CategoryIcon } from "./icons/CategoryIcon"
import { ClockIcon } from "./icons/ClockIcon"
import { GridIcon } from "./icons/GridIcon"
import { HeartIcon } from "./icons/HeartIcon"
import { MessageIcon } from "./icons/MessageIcon"
import { SettingsIcon } from "./icons/SettingsIcon"
import { Logo } from "./Logo"
import { SidebarMenuItem } from "./SidebarMenuItem"

export const Sidebar = () => {
  return (
    <VStack h="full" justify="space-between" align="start" pt={4} px={10} minW="containers.sidebar">
      <VStack>
        <Logo />

        <VStack w="full" spacing={0}>
          <SidebarMenuItem title="Products" icon={<GridIcon color="inherit" />} />
          <SidebarMenuItem title="Favourites" icon={<HeartIcon color="inherit" />} />
          <SidebarMenuItem title="Categories" icon={<CategoryIcon color="inherit" />} />
          <SidebarMenuItem title="Messages" icon={<MessageIcon color="inherit" />} />
          <SidebarMenuItem title="Recent" icon={<ClockIcon color="inherit" />} />
          <SidebarMenuItem title="Settings" icon={<SettingsIcon color="inherit" />} />
        </VStack>
      </VStack>

      <Box bg="white" p={4} w="full" roundedTop={32}>
        <HStack>
          <Image
            src="https://i.imgur.com/Csf2kc7.jpg"
            alt="profile-picture"
            boxSize={13}
            objectFit="cover"
            rounded="full"
          />
          <VStack>
            <Heading color="ui.40">Hello,</Heading>
            <Heading>Jonny</Heading>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  )
}
