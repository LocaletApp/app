import { passportAuth } from "blitz"
import db from "db/index"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { ConfigService } from "app/core/services/config.service"

export default passportAuth({
  successRedirectUrl: "/",
  errorRedirectUrl: "/",
  strategies: [
    {
      strategy: new GoogleStrategy(ConfigService.googleStrategyConfig(), async function (
        accessToken,
        refreshToken,
        profile,
        done
      ) {
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
      }),
    },
  ],
})
