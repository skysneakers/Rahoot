import type { Answer } from "@rahoot/common/types/game"

export function normalizeAnswer(answer: Answer): {
  text?: string
  image?: string
} {
  if (typeof answer === "string") {
    return { text: answer }
  }
  if (typeof answer === "number") {
    return { text: String(answer) }
  }
  return answer
}
