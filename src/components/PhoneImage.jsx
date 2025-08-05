import heroBgImg from '../assets/app-img-portrait.png'

const PhoneImage = () => {
  return (
    <div className='px-7 py-20 bg-white xl:rounded-2xl'>
      <h1 className='font-bold text-3xl text-center text-black mb-16'>
        Your daily source of insight, always ready.
      </h1>
    
      <div className='w-[230px] sm:w-[290px] overflow-hidden mx-auto'>
        <img src={heroBgImg} alt="bg-img" className='w-full object-cover'/>
      </div>
    </div>
  )
}

export default PhoneImage