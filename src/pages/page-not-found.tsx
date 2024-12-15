import { Link } from 'react-router'

export default function PageNotFound() {
  return (
    <div className='text-center mt-20'>
      <h1 className='text-destructive'>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to='/'>Go to Home</Link>
    </div>
  )
}
