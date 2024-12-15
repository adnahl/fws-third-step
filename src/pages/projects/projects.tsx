import { Link } from 'react-router'

export default function ProjectsPage() {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        <li>
          <Link to='/projects/1'>Project 1</Link>
        </li>
        <li>
          <Link to='/projects/2'>Project 2</Link>
        </li>
      </ul>
    </div>
  )
}
