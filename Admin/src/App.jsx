import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Admin from './Pages/Admin/Admin'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Admin/>
      <Sidebar/>
    </div>
  )
}

export default App
