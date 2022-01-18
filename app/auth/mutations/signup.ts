import { resolver, SecurePassword } from "blitz"
import db, { UserRole } from "db"
import { Signup } from "app/auth/validations"

export default resolver.pipe(resolver.zod(Signup), async ({ name, email, password }, ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim())
  const user = await db.user.create({
    data: {
      name: name,
      email: email.toLowerCase().trim(),
      hashedPassword,
      role: UserRole.USER,
    },
    select: { id: true, name: true, email: true, role: true },
  })

  await ctx.session.$create({ userId: user.id, role: user.role as UserRole })
  return user
})
