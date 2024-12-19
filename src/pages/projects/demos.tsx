import Demos from '@/components/demos/demos'
import { projects } from '@/db/projects'
import { Link, redirect, useParams } from 'react-router'

export default function DemosPage() {
  const { pid, did } = useParams()

  if (!pid) redirect('/')

  // This is a dummy project object for demonstration purposes
  const project = projects.find((p) => p.id === pid)

  if (!project) {
    return <p className='text-destructive'>Project not found</p>
  }

  const { name, demosIds } = project

  if (!demosIds || !did || !demosIds.includes(did)) {
    return <p className='text-destructive'>Demo not found</p>
  }

  const restDemos = demosIds.filter((id) => id !== did)

  return (
    <section className='space-y-4'>
      <Link to={`/projects/${pid}`} className='text-blue-400 text-xs'>
        ← Back to project
      </Link>
      <h2 className='text-2xl font-bold'>{name}</h2>
      {restDemos.length > 0 ? (
        <ul className='text-sm flex items-center space-x-4 overflow-x-auto py-1 border-y'>
          {restDemos.map((id) => (
            <li key={id} className='text-blue-400'>
              <Link to={`/projects/${pid}/${id}`}>Demo {id}</Link>
            </li>
          ))}
        </ul>
      ) : null}
      <p className='text-lg underline underline-offset-2'>Demo {did}:</p>
      <Demos id={did} />
    </section>
  )
}
