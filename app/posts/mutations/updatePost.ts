import { AuthenticationError, NotFoundError, resolver } from "blitz"
import db, { UserRole } from "db"
import { z } from "zod"
import { Ctx } from "next/dist/shared/lib/utils"

const UpdatePost = z.object({
  id: z.number(),
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdatePost),
  resolver.authorize(),
  async ({ id, ...data }, ctx: Ctx) => {
    if (!ctx.session.userId) throw new AuthenticationError("No User")

    const post = await db.post.findFirst({ where: { id } })
    if (!post) throw new NotFoundError()

    if (post.authorId != ctx.session.userId) {
      ctx.session.$authorize([UserRole.SITE_MODERATOR, UserRole.SITE_ADMIN])
    }
    return db.post.update({ where: { id }, data })
  }
)
