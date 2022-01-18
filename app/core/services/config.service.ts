export class ConfigService {
  static get(key: keyof NodeJS.ProcessEnv, throwIfEmpty = false) {
    const value = process.env[key]
    if (throwIfEmpty && (value === undefined || value === null)) {
      throw new Error(`'${key}' is not defined in the env-vars.`)
    }
    return value
  }

  static get databaseURL() {
    return this.get("DATABASE_URL", true)
  }

  static host() {
    if (this.get("HOST_NAME") != "http://localhost") {
      return {
        name: this.get("HOST_NAME"),
        port: this.get("HOST_PORT") || "",
      }
    } else {
      return {
        name: this.get("HOST_NAME") || "http://localhost",
        port: this.get("HOST_PORT") || "3000",
      }
    }
  }

  static googleStrategyConfig() {
    return {
      clientID: this.get("AUTH_GOOGLE_CLIENTID", true),
      clientSecret: this.get("AUTH_GOOGLE_CLIENTSECRET", true),
      callbackURL: `${ConfigService.host().name}:${
        ConfigService.host().port
      }/api/auth/google/callback`,
      scope: ["profile", "email"],
    }
  }
}
