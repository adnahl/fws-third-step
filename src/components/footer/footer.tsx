export default function Footer() {
  return (
    <footer className='text-center text-gray-600 p-6 font-ubuntu text-sm'>
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <a
          title='Adnan Al website'
          href='https://aahl.work'
          target='_blank'
          rel='noopener noreferrer'
          className='underline hover:text-foreground'
        >
          Adnan Al
        </a>
        {'. '} All rights reserved.
      </p>
    </footer>
  )
}
