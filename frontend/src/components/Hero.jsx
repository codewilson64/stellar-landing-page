import Button from './Button'
import heroBgImg_2 from '../assets/app-img2-portrait.png'
import SubscribeInput from './SubscribeInput'

const Hero = () => {
  return (
    <div className='max-w-[1280px] mx-auto sm:flex justify-between items-center px-5 lg:px-12 py-20 pt-0 bg-white'>
      {/* Desktop left content */}
      <div className='sm:w-[70%] flex flex-col py-20'>
        <div className='mb-6'>
          <h1 className='font-bold text-6xl sm:text-7xl text-left text-black mb-3'>Stellar</h1>
          <span className='font-semibold text-xl text-black'>Read book summary in just 10 mins</span>
        </div>

        <div className='sm:w-[500px] mb-6'>
          <p className='text-lg text-left font-normal text-black'>Read and gain valuable knowledge from the world's best books on Self-Growth, Business, Investment, Productivity, and more!</p>
        </div>

        <div className='max-w-[500px]'>
          <SubscribeInput />
        </div>
      </div>

      {/* Desktop right content */}
      <div className='w-[230px] sm:w-[290px] overflow-hidden mx-auto'>
        <img src={heroBgImg_2} alt="bg-img" className='w-full h-full object-cover' loading='lazy'/>
      </div>
    </div>
  )
}

export default Hero