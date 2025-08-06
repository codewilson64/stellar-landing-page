import googlePlayIcon from '../assets/googleplay.png' 
import appStoreIcon from '../assets/appstore.png'

const Button = () => {
  return (
    <div className='flex gap-3 w-full ss:w-[380px]'>
      <button className='cursor-pointer'>
        <img src={googlePlayIcon} alt="Google Play icon" width="180" height="50" loading='lazy'/>
      </button>

        <button className='relative cursor-not-allowed'>
          <img src={appStoreIcon} alt="App Store icon" width="180" height="50" className='opacity-30' loading='lazy'/>
          <span className='absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold sm:text-lg bg-white/30 text-black px-2 py-1 rounded'>
            Coming Soon
          </span>
        </button>       
    </div>
  )
}

export default Button