import clsx from "clsx"
import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from "react"

type AnswerContent = {
  text?: string
  image?: string
}

type Props = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: ElementType
    content?: AnswerContent
  }

const AnswerButton = ({
  className,
  icon: Icon,
  children,
  content,
  ...otherProps
}: Props) => (
  <button
      className={clsx(
        "shadow-inset flex items-center gap-3 rounded px-4 py-6 text-left md:gap-4 md:px-5 md:py-7",
        className,
      )}
    {...otherProps}
  >
    <Icon className="h-6 w-6 shrink-0" />
    {content?.image ? (
      <span className="flex min-h-0 min-w-0 flex-1 flex-col items-start gap-2">
        <img
          src={content.image}
          alt={content.text ?? "Answer"}
          className="max-h-40 w-auto shrink-0 rounded object-contain md:max-h-48 lg:max-h-56"
        />
        {content.text && (
          <span className="drop-shadow-md">{content.text}</span>
        )}
      </span>
    ) : (
      <span className="drop-shadow-md">{content?.text ?? children}</span>
    )}
  </button>
)

export default AnswerButton
