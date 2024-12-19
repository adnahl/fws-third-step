import MainLayout from '@/components/layout/main-layout'
import HomePage from '@/pages/home'
import PageNotFound from '@/pages/page-not-found'
import ProjectsPage, { ProjectPage } from '@/pages/projects'
import DemosPage from '@/pages/projects/demos'
import { Routes, Route } from 'react-router'

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='projects'>
          <Route index element={<ProjectsPage />} />
          <Route path=':pid' element={<ProjectPage />} />
          <Route path=':pid/:did' element={<DemosPage />} />
        </Route>
        <Route path='/' index element={<HomePage />} />
        <Route path='/*' element={<HomePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
