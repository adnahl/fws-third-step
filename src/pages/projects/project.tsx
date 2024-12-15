import { redirect, useParams } from 'react-router'

export default function Project() {
  const { pid } = useParams()

  if (!pid) redirect('/')

  // This is a dummy project object for demonstration purposes
  const project = {
    id: pid,
    name: 'Project Name'
  }

  if (!project) {
    return <p className='text-destructive'>Project not found</p>
  }

  return (
    <section>
      <h2>{project.name}</h2>
      <p>{project.id}</p>
    </section>
  )
}
