import { useRouter } from "blitz"

export const usePage = () => {
  const router = useRouter()

  const page = Number(router.query.page) || 0

  const next = (skip = 1) => router.push({ query: { page: page + skip } })
  const previous = (skip = 1) => router.push({ query: { page: page - skip } })

  return { page, next, previous } as const
}
