import { DndBoard } from './dnd/dnd-board'

export default function Demos({ id }: { id: string }) {
  if (id === '1') return <DndBoard />
  return <p className='text-destructive'>Demo not found</p>
}
