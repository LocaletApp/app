import { AuthenticationError, resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreatePost = z.object({
  name: z.string(),
})

export default resolver.pipe(resolver.zod(CreatePost), resolver.authorize(), ({ name }, ctx) => {
  if (!ctx.session.userId) throw new AuthenticationError("No User")
  db.post.create({
    data: { name, authorId: ctx.session.userId },
  })
})
