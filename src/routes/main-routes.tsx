import MainLayout from '@/components/layout/main-layout'
import HomePage from '@/pages/home'
import PageNotFound from '@/pages/page-not-found'
import Project from '@/pages/projects/project'
import { Routes, Route } from 'react-router'

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='projects'>
          <Route path=':pid' element={<Project />} />
        </Route>
        <Route path='/' index element={<HomePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
