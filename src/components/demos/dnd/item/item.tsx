import { forwardRef, memo } from 'react'
import type { DraggableSyntheticListeners } from '@dnd-kit/core'
import type { Transform } from '@dnd-kit/utilities'
import { Handle } from './components/handle'

export interface Props {
  dragOverlay?: boolean
  dragging?: boolean
  handle?: boolean
  handleProps?: React.ComponentProps<typeof Handle>
  transform?: Transform | null
  listeners?: DraggableSyntheticListeners
  sorting?: boolean
  style?: React.CSSProperties
  transition?: string | null
  wrapperStyle?: React.CSSProperties
  value: React.ReactNode
  renderItem?(args: {
    dragOverlay: boolean
    dragging: boolean
    sorting: boolean
    listeners: DraggableSyntheticListeners
    ref: React.Ref<HTMLElement>
    style: React.CSSProperties | undefined
    transform: Props['transform']
    transition: Props['transition']
    value: Props['value']
  }): React.ReactElement
}

export const Item = memo(
  forwardRef<HTMLLIElement, Props>(
    (
      {
        dragOverlay,
        dragging,
        handle,
        handleProps,
        listeners,
        renderItem,
        sorting,
        style,
        transition,
        transform,
        value,
        wrapperStyle,
        ...props
      },
      ref
    ) => {
      return renderItem ? (
        renderItem({
          dragOverlay: Boolean(dragOverlay),
          dragging: Boolean(dragging),
          sorting: Boolean(sorting),
          listeners,
          ref,
          style,
          transform,
          transition,
          value
        })
      ) : (
        <li
          className='flex box-border [transform:translate3d(var(--translate-x,_0),_var(--translate-y,_0),_0)_scaleX(var(--scale-x,_1))_scaleY(var(--scale-y,_1))] origin-top-left'
          style={
            {
              ...wrapperStyle,
              transition: [transition, wrapperStyle?.transition]
                .filter(Boolean)
                .join(', '),
              '--translate-x': transform
                ? `${Math.round(transform.x)}px`
                : undefined,
              '--translate-y': transform
                ? `${Math.round(transform.y)}px`
                : undefined,
              '--scale-x': transform?.scaleX
                ? `${transform.scaleX}`
                : undefined,
              '--scale-y': transform?.scaleY ? `${transform.scaleY}` : undefined
            } as React.CSSProperties
          }
          ref={ref}
        >
          <div
            className='w-full flex justify-between pl-4 pb-2'
            style={style}
            {...(!handle ? listeners : undefined)}
            {...props}
          >
            {value}
            {handle ? <Handle {...handleProps} {...listeners} /> : null}
          </div>
        </li>
      )
    }
  )
)
