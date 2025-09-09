import Layout from "./components/layout/Layout"
import {Routes,Route} from 'react-router'
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import DashboardPage from "./pages/Dashboard"
import TaskPage from "./pages/Tasks"
function App() {

  return (
   <Layout>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="about"  element={<AboutPage/>}/>
      <Route path="dashboard" element={<DashboardPage/>}/>
      <Route path="tasks" element={<TaskPage/>}/>

    </Routes>
   </Layout>
  )
}

export default App
