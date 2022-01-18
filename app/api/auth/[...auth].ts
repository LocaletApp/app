import { passportAuth } from "blitz"
import db from "db"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { router } from "next/client"

const googleScopes = ["profile", "email"]
export default passportAuth({
  successRedirectUrl: "/",
  errorRedirectUrl: "/",
  strategies: [
    {
      strategy: new GoogleStrategy(
        {
          clientID: process.env.AUTH_GOOGLE_CLIENTID,
          clientSecret: process.env.AUTH_GOOGLE_CLIENTSECRET,
          callbackURL: `${process.env.HOST_URL}/api/auth/google/callback`,
          scope: googleScopes,
        },
        async function (accessToken, refreshToken, profile, done) {
          const email = profile._json.email
          const name = profile._json.name
          const user = await db.user.upsert({
            where: { email },
            create: {
              name: name,
              email,
            },
            update: { email },
          })
          const publicData = {
            userId: user.id,
            roles: [user.role],
            source: "google",
          }
          done(undefined, { publicData })
        }
      ),
    },
  ],
})
