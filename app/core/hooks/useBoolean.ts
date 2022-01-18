import { useState } from "react"

export const useBoolean = (initial: boolean) => {
  const [bool, setBool] = useState(initial)

  const on = () => setBool(true)
  const off = () => setBool(false)
  const toggle = () => setBool((b) => !b)

  return [bool, { on, off, toggle }] as const
}
