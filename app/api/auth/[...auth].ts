import { passportAuth } from "blitz"
import db from "db"
import { Strategy as DiscordStrategy } from "passport-discord"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"

const discordScopes = ["identify", "email", "guilds", "guilds.join"]
const googleScopes = ["profile", "email"]
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
          scope: discordScopes,
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
    {
      strategy: new GoogleStrategy(
        {
          clientID: "950333487984-svsmlr5e4b540f622h3sdb9mhgeq66hq.apps.googleusercontent.com",
          clientSecret: "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",
          callbackURL: "http://localhost:3000/api/auth/google/callback",
          scope: googleScopes,
        },
        async function (accessToken, refreshToken, profile, done) {
          const email = profile._json.email
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
            source: "google",
          }
          done(undefined, { publicData })
        }
      ),
    },
  ],
})
