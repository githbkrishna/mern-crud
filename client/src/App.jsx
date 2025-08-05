import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import ProductCard from './components/ProductCard'

function App() {

  return (
    <div className='text-white bg-gray-800'>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/create' element={<CreatePage/>} />
        <Route path='/productcards' element={<ProductCard/>} />
      </Routes>
    </div>
  )
}

export default App
