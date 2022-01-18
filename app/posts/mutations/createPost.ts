import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreatePost = z.object({
  name: z.string(),
  authorId: z.number(),
})

export default resolver.pipe(resolver.zod(CreatePost), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  input.authorId = 1
  const post = await db.post.create({ data: input })
  return post
})
