import Hero from '@/components/header/hero'
import MDRender from '@/components/md/md-render'
import { projects } from '@/db/projects'
import { redirect, useParams } from 'react-router'

export default function ProjectPage() {
  const { pid } = useParams()

  if (!pid) redirect('/')

  // This is a dummy project object for demonstration purposes
  const project = projects.find((p) => p.id === pid)

  if (!project) {
    return <p className='text-destructive'>Project not found</p>
  }

  const { name, description, bodyPath } = project

  return (
    <section className='space-y-8'>
      <Hero title={name} description={description} />
      <MDRender mdPath={bodyPath} />
    </section>
  )
}
