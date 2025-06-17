import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav
      className='max-w-[1280px] h-18 px-5 lg:px-12'>
      <Link to='/' className='flex items-center justify-center'>
        <img src={logo} alt="logo" className='w-[70px] h-[70px] cursor-pointer'/>
      </Link>
    </nav>
  )
}

export default Navbar