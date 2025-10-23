import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='px-5 sm:px-28 pt-20 pb-5'>
      <div className='flex justify-center'>
        <img src={logo} alt="logo" className='size-12 mb-6 lg:size-24'/>
      </div>

      <div className='mb-20'>
        <div className='flex flex-col gap-5 mb-10'>
          <Link to={'/termsofuse'} className='w-fit font-normal text-lg text-black'>
            Terms of Use
          </Link>
          <Link to={'/privacypolicy'} className='w-fit font-normal text-lg text-black'>
            Privacy Policy
          </Link>
        </div>

        <div>
          <h3 className='text-xl font-bold text-black mb-3'>Contact</h3>
          <p className='text-lg text-black'>Customer support:</p>
          <a href="mailto:hellostellarapp@gmail.com" className="text-blue-600 hover:underline">
            hellostellarapp@gmail.com
          </a>
        </div>
      </div>

      <p className='font-normal text-sm text-black'>&copy; {new Date().getFullYear()} Stellary. All rights reserved.</p>
    </footer>
  )
}

export default Footer