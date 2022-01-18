import { NextApiRequest, NextApiResponse, passportAuth } from "blitz"
import db from "db/index"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { ConfigService } from "app/core/services/config.service"
import { AuthProviders } from "app/core/utils/enums"

type PassportProps = {
  redirect?: string
}

const passports = ({ redirect = "/" }: PassportProps) =>
  passportAuth({
    successRedirectUrl: redirect,
    errorRedirectUrl: redirect + `?error=${encodeURIComponent("Unknown authorization error")}`,
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
          const iconUrl = profile._json.picture

          const user = await db.user.upsert({
            where: { email },
            update: { name, iconUrl },
            create: {
              name,
              email,
              iconUrl,
            },
          })

          const publicData = {
            userId: user.id,
            roles: [user.role],
            source: AuthProviders.GOOGLE,
          }

          done(undefined, { publicData })
        }),
      },
    ],
  })

export default function AuthApi(req: NextApiRequest, res: NextApiResponse) {
  try {
    const configuredPassports = passports({
      redirect: req.query.redirect
        ? Buffer.from(req.query.redirect as string, "base64").toString("utf8")
        : undefined,
    })
    return configuredPassports(req, res)
  } catch (e) {
    return res.status(500).redirect(`/?error=${encodeURIComponent("Unknown authorization error")}`)
  }
}
