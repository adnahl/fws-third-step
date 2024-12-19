import { useDroppable, UniqueIdentifier } from '@dnd-kit/core'

type Props = {
  children: React.ReactNode
  id: UniqueIdentifier
}

export function Droppable({ children, id }: Props) {
  const { setNodeRef } = useDroppable({ id })

  return (
    <div ref={setNodeRef} aria-label='Droppable region'>
      {children}
    </div>
  )
}
