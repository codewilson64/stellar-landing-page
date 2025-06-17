import googlePlayIcon from '../assets/googleplay.png' 
import appStoreIcon from '../assets/appstore.png'

const Button = () => {
  return (
    <div className='flex gap-3 w-full ss:w-[380px]'>
        <button className='cursor-pointer'>
          <img src={googlePlayIcon} alt="icon"/>
        </button>

        <button className='cursor-pointer'>
          <img src={appStoreIcon} alt="icon" />
        </button>
    </div>
  )
}

export default Button