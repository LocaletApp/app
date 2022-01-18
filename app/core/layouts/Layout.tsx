import { BlitzLayout } from "blitz"
import { Head } from "app/core/layouts/meta/Head"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head />

      {children}
    </>
  )
}

export default Layout
