import db, { UserRole } from "./index"

/*
 * Allow easy access for admin emails
 */
const ADMIN_EMAILS = ["ken@slinky.link"]

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  for (const email of ADMIN_EMAILS) {
    const adminUser = await db.user.findFirst({ where: { email } })
    if (adminUser && adminUser.role !== UserRole.SITE_ADMIN) {
      await db.user.update({ where: { id: adminUser.id }, data: { role: UserRole.SITE_ADMIN } })
    }
  }
}

export default seed
