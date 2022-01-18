export class ConfigService {
  static get(key: keyof NodeJS.ProcessEnv, throwIfEmpty = false) {
    const value = process.env[key]
    if (throwIfEmpty && (value === undefined || value === null)) {
      throw new Error(`'${key}' is not defined in the env-vars.`)
    }
    return value
  }

  static get isDebug() {
    return this.get("DEBUG") === "absolutely"
  }

  static get databaseURL() {
    return this.get("DATABASE_URL", true)
  }

  static get hostname() {
    return this.get("HOST_NAME") || "https://localet.app"
  }

  static get redirectUri() {
    if (this.hostname.includes("localhost")) {
      return this.hostname + ":3000"
    } else {
      return this.hostname
    }
  }

  static googleStrategyConfig() {
    return {
      clientID: this.get("AUTH_GOOGLE_CLIENTID", true),
      clientSecret: this.get("AUTH_GOOGLE_CLIENTSECRET", true),
      callbackURL: `${this.redirectUri}/api/auth/google/callback`,
      scope: ["profile", "email"],
    }
  }
}
