import { Suspense, lazy, } from 'react'
import Layout from "./components/layout/Layout"
import { Routes, Route } from 'react-router'
const HomePage = lazy(()=>import('./pages/Home'))
const AboutPage = lazy(()=>import('./pages/About'))

const DashboardPage = lazy(()=>import('./pages/Dashboard'))

const TaskPage = lazy(()=>import('./pages/Tasks'))

const TaskIdPage = lazy(()=>import('./pages/TaskId'))

import useToast from '@/hooks/useToast'
function App() {
  const { ToastContainer } = useToast();
  return (
    <Suspense fallback={<div>Loading…</div>}>

      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="tasks" element={<TaskPage />} />
          <Route path="tasks/:id" element={<TaskIdPage />} />



        </Routes>
        <ToastContainer />
      </Layout>
    </Suspense>

  )
}

export default App
