import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <main className='font-poppins flex flex-col items-center [&>*]:w-full [&>*]:max-w-4xl px-4 min-h-screen'>
      <Outlet />
    </main>
  )
}
