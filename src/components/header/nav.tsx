import { projects } from '@/db/projects'
import { NavLink } from 'react-router'

const activeClass = 'opacity-100'
const idleClass = 'opacity-50 hover:opacity-100'

export default function Nav() {
  return (
    <nav className='px-4 py-2 border-b border-b-dotted mb-4 flex justify-center'>
      <div className='w-full max-w-4xl flex justify-between items-center'>
        <ul className='flex space-x-4'>
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
                className={({ isActive }) =>
                  isActive ? activeClass : idleClass
                }
              >
                Project {idx + 1}
              </NavLink>
            </li>
          ))}
        </ul>
        <a
          title='Github repository'
          href='https://github.com/adnahl/fws-third-step'
          target='_blank'
          rel='noopener noreferrer'
          className='opacity-50 hover:opacity-100'
        >
          Github
        </a>
      </div>
    </nav>
  )
}
