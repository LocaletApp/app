import { passportAuth } from "blitz"
import db from "db"
import { Strategy as DiscordStrategy } from "passport-discord"
var scopes = ["identify", "email", "guilds", "guilds.join"]
export default passportAuth({
  successRedirectUrl: "/",
  errorRedirectUrl: "/",
  strategies: [
    {
      strategy: new DiscordStrategy(
        {
          clientID: "930642040499339275",
          clientSecret: "EZr7Vds727LftRnsSvipjt0YgF9Fb79D",
          callbackURL: "http://localhost:3000/api/auth/discord/callback",
          scope: scopes,
        },
        async function (accessToken, refreshToken, profile, done) {
          const email = profile.email
          const user = await db.user.upsert({
            where: { email },
            create: {
              email,
            },
            update: { email },
          })
          const publicData = {
            userId: user.id,
            roles: [user.role],
            source: "discord",
          }
          done(undefined, { publicData })
        }
      ),
    },
  ],
})
