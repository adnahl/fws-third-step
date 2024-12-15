import { projects } from '@/db/projects'
import { NavLink } from 'react-router'

const activeClass = 'opacity-100'
const idleClass = 'opacity-50 hover:opacity-100'

export default function Nav() {
  return (
    <nav className='px-4 py-2 border-b border-b-dotted mb-4'>
      <ul className='mx-auto w-full max-w-4xl flex space-x-4'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeClass : idleClass)}
          >
            About
          </NavLink>
        </li>
        {projects.map(({ id }, idx) => (
          <li key={id}>
            <NavLink
              to={`/projects/${id}`}
              className={({ isActive }) => (isActive ? activeClass : idleClass)}
            >
              Project {idx + 1}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
