import { forwardRef } from 'react'
import { Handle } from '../item/components/handle'

export type ContainerProps = {
  children: React.ReactNode
  label?: string
  style?: React.CSSProperties
  handleProps?: React.HTMLAttributes<HTMLButtonElement>
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, handleProps, label, style, ...props }: ContainerProps, ref) => {
    return (
      <div
        {...props}
        ref={ref as React.Ref<HTMLDivElement> & React.Ref<HTMLButtonElement>}
        style={style}
        className='min-w-52 overflow-hidden bg-sky-500 px-2 m-1'
      >
        {label ? (
          <div className='flex items-center justify-between'>
            <h4>{label}</h4> <Handle {...handleProps} />
          </div>
        ) : null}
        {children}
      </div>
    )
  }
)
