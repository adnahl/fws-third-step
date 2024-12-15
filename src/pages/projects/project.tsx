import Hero from '@/components/header/hero'
import { projects } from '@/db/projects'
import { redirect, useParams } from 'react-router'

export default function Project() {
  const { pid } = useParams()

  if (!pid) redirect('/')

  // This is a dummy project object for demonstration purposes
  const project = projects.find((p) => p.id === pid)

  if (!project) {
    return <p className='text-destructive'>Project not found</p>
  }

  const { name, description, body } = project

  return (
    <section>
      <Hero title={name} description={description} />
      <p>{body}</p>
    </section>
  )
}
