import { forwardRef, CSSProperties } from 'react'

export type ActionProps = React.HTMLAttributes<HTMLButtonElement> & {
  cursor?: CSSProperties['cursor']
}

export const Action = forwardRef<HTMLButtonElement, ActionProps>(
  ({ cursor, style, ...props }, ref) => {
    return <button ref={ref} {...props} style={{ ...style, cursor }} />
  }
)
