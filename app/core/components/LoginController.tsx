import { useSession } from "blitz"
import { ReactNode } from "react"

export interface LoginControllerProps {
  children: ReactNode
  childrenLoggedOut: ReactNode
}

export const LoginController = ({ children, childrenLoggedOut }: LoginControllerProps) => {
  const session = useSession()

  return <>{children}</>
}
