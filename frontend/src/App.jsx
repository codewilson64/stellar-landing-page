import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Account from './pages/Account'
import Refund from './pages/Refund'

const App = () => {
  return (
    <div className='font-inter max-w-[1280px] w-full mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/termsofuse' element={<Terms />}/>
        <Route path='/privacypolicy' element={<Privacy />}/>
        <Route path='/delete-account' element={<Account />}/>
        <Route path='/refund' element={<Refund />}/>
      </Routes>
      <Footer />
    </div>

  )
}

export default App