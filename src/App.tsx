import MainRoutes from '@/routes/main-routes'
import Nav from '@c/header/nav'
import Footer from '@c/footer/footer'

export default function App() {
  return (
    <>
      <Nav />
      <MainRoutes />
      <Footer />
    </>
  )
}
