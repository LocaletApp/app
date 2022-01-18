import { passportAuth } from "blitz"
import db from "db"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { ConfigService } from "../../core/services/config.service"

const googleScopes = ["profile", "email"]
export default passportAuth({
  successRedirectUrl: "/",
  errorRedirectUrl: "/",
  strategies: [
    {
      strategy: new GoogleStrategy(
        {
          clientID: ConfigService.googleStrategyConfig().clientId,
          clientSecret: ConfigService.googleStrategyConfig().clientSecret,
          callbackURL: `${ConfigService.host().name}:${
            ConfigService.host().port
          }/api/auth/google/callback`,
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
