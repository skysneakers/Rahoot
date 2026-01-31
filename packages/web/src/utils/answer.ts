export type AnswerContent = {
  text?: string
  image?: string
}

export type QuizAnswer = string | number | AnswerContent

export function normalizeAnswer(answer: QuizAnswer): AnswerContent {
  if (typeof answer === "string") {
    return { text: answer }
  }
  if (typeof answer === "number") {
    return { text: String(answer) }
  }
  return {
    text: typeof answer.text === "string" ? answer.text : undefined,
    image: typeof answer.image === "string" ? answer.image : undefined,
  }
}
