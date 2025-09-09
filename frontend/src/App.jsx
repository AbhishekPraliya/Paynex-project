import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Sidebar/>
        <main className='main-container'>
          <Navbar/>
          <HomePage/>


        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
