import { BlitzLayout } from "blitz"
import { Head } from "app/core/layouts/meta/Head"
import { Flex } from "../components/system"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <Flex sx={{ height: "100%", width: "100%" }}>
      <Head />

      {children}
    </Flex>
  )
}

export default Layout
