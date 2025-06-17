import Button from './Button'

const Hero = () => {
  return (
    <div className='flex flex-col sm:items-center px-7 lg:px-28 py-10 bg-white w-full'>
      <div className='mb-6'>
        <h1 className='font-bold text-5xl sm:text-7xl sm:text-center text-black mb-3'>Stellar</h1>
        <span className='font-semibold text-xl text-black'>Read book summary in just 10 mins</span>
      </div>

      <div className='sm:w-[500px] mb-6'>
        <p className='text-lg sm:text-center font-normal text-black'>Read and gain valuable knowledge from the world's best books on Self-Growth, Business, Investment, Productivity, and more!</p>
      </div>

      <Button />
      
    </div>
  )
}

export default Hero