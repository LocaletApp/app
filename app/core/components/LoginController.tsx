import { Button, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper } from "@mui/material"
import { Email, Google } from "@mui/icons-material"
import { Link, Routes, useSession } from "blitz"
import { ReactNode, useRef } from "react"
import { useBoolean } from "../hooks/useBoolean"
import { Flex } from "./system"
import { AuthProviders } from "../utils/enums"
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state"

export interface LoginControllerProps {
  children: ReactNode
  childrenLoggedOut: ReactNode
}

export const LoginController = ({ children, childrenLoggedOut }: LoginControllerProps) => {
  const session = useSession()

  if (!session.userId) {
    return (
      <PopupState variant="popover" popupId="login-controller-menu">
        {(popupState) => (
          <>
            <Flex {...bindTrigger(popupState)}>{childrenLoggedOut}</Flex>
            <Menu {...bindMenu(popupState)}>
              <MenuList sx={{ width: 320, maxWidth: "100%" }}>
                <Link
                  href={Routes.AuthPage({
                    provider: AuthProviders.GOOGLE,
                    redirect: "/?test=true",
                  })}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <Google />
                    </ListItemIcon>
                    <ListItemText>Google</ListItemText>
                  </MenuItem>
                </Link>
                <Link href={Routes.LoginPage()}>
                  <MenuItem>
                    <ListItemIcon>
                      <Email />
                    </ListItemIcon>
                    <ListItemText>Email</ListItemText>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </>
        )}
      </PopupState>
    )
  }

  return <>{children}</>
}
