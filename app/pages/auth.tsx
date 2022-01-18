import { GetServerSideProps, getSession } from "blitz"

export default function AuthPage() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const session = await getSession(req, res)

  if (!session.userId && query.provider) {
    return {
      redirect: {
        destination: `/api/auth/${query.provider}?redirect=${query.redirect ?? "/"}`,
        permanent: false,
      },
    }
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  }
}
