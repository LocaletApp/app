import { AuthenticationError, NotFoundError, resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { UserRole } from "../../../db"
import { Ctx } from "next/dist/shared/lib/utils"

const DeletePost = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(DeletePost),
  resolver.authorize(),
  async ({ id }, ctx: Ctx) => {
    if (!ctx.session.userId) throw new AuthenticationError("No User")

    const post = await db.post.findFirst({ where: { id } })
    if (!post) throw new NotFoundError()

    if (post.authorId != ctx.session.userId) {
      ctx.session.$authorize([UserRole.SITE_MODERATOR, UserRole.SITE_ADMIN])
    }

    return db.post.delete({ where: { id: id } })
  }
)
