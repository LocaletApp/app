import { Suspense } from "react"
import { BlitzPage, Image, Link, Routes, useMutation, useRouter } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material"
import { Box } from "@mui/system"
import { Column, Row } from "../core/components/system"
import { useBoolean } from "../core/hooks/useBoolean"
import { Close, Logout } from "@mui/icons-material"
import { LoginController } from "../core/components/LoginController"
import { ConfigService } from "../core/services/config.service"
import { UserRole } from "db"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const router = useRouter()
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  console.log(currentUser)

  if (currentUser) {
    return (
      <Row spacing={4}>
        <Column>
          <Card sx={{ width: 324 }}>
            <CardHeader
              avatar={<Avatar src={currentUser.iconUrl ?? ""} />}
              action={
                <IconButton color="error" onClick={() => logoutMutation()}>
                  <Logout />
                </IconButton>
              }
              title={currentUser.name}
              subheader={currentUser.email}
            />
            <CardContent>
              <Row spacing={2}>
                <Chip label={`ID: ${currentUser.id}`} />
                <Chip label={`UserRole: ${currentUser.role}`} />
              </Row>
            </CardContent>
          </Card>
        </Column>
      </Row>
    )
  } else {
    return (
      <Row spacing={2}>
        <Link href={Routes.SignupPage()}>
          <Button size="large" variant="outlined">
            Sign Up
          </Button>
        </Link>
        <LoginController
          childrenLoggedOut={
            <Button size="large" variant="contained">
              Login
            </Button>
          }
        >
          <Avatar />
        </LoginController>
      </Row>
    )
  }
}

const DebugMenu = () => {
  const user = useCurrentUser()
  const [isOpen, setIsOpen] = useBoolean(false)

  if (!user || ConfigService.isDebug || user.role !== UserRole.SITE_ADMIN) {
    return null
  }

  return (
    <>
      <Dialog open={isOpen}>
        <DialogTitle>
          Developer Debug Menu
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            color="error"
            onClick={setIsOpen.off}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Column spacing={1}>
            <Row spacing={1}>
              <Button variant="outlined">Thanks</Button>
              <Button variant="outlined">Thanks</Button>
              <Button variant="outlined">Thanks</Button>
              <Button variant="outlined">Thanks</Button>
            </Row>
            <Row spacing={1}>
              <Button variant="outlined">Thanks</Button>
              <Button variant="outlined">Thanks</Button>
              <Button variant="outlined">Thanks</Button>
              <Button variant="outlined">Thanks</Button>
            </Row>
          </Column>
        </DialogContent>
      </Dialog>
      <Button
        sx={{ position: "absolute", top: 8, right: 8 }}
        variant="outlined"
        color="error"
        onClick={setIsOpen.on}
      >
        DEBUG
      </Button>
    </>
  )
}

const Home: BlitzPage = () => {
  return (
    <Column minHeight="100vh">
      <Box>
        <Image src={logo} alt="Localet" />
      </Box>
      <Row spacing={2}>
        <Suspense fallback={<CircularProgress />}>
          <UserInfo />
        </Suspense>
        <Suspense fallback={<CircularProgress />}>
          <DebugMenu />
        </Suspense>
      </Row>
    </Column>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
