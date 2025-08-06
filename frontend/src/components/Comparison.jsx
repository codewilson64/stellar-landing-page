import bookStack from '../assets/book-stack.png'
import next from '../assets/next.png'
import phone from '../assets/iphone.png'
import logo from '../assets/logo.png'
import check from '../assets/check.png'

const Comparison = () => {
  return (
    <div className='flex flex-col w-full ss:w-[600px] mx-auto px-7 py-20 bg-white'>
      <div className='mb-12'>
        <h3 className='font-bold text-3xl text-black mb-7'>Typical book</h3>

        <div className='flex items-center justify-between px-8'>
            <div>
              <img src={bookStack} alt="icon" className='size-16'/>
            </div>
            <div>
              <img src={next} alt="icon" className='size-10'/>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold'>300+ pages</p>
              <p className='font-semibold'>5-10 hours</p>
            </div>
        </div>
      </div>
      
      <div>
        <h3 className='font-bold text-3xl text-black mb-7'>Book summary</h3>

        <div className='flex items-center justify-between px-8'>
            <div className="relative">
              <img src={phone} alt="icon" className="size-20" />
              <img src={logo} alt="logo" className="absolute size-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
            </div>
            <div>
              <img src={next} alt="icon" className='size-10'/>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <img src={check} alt="check" className='size-4'/>
                <p className='font-semibold'>Key ideas</p>
              </div>
              <div className='flex items-center gap-2'>
                <img src={check} alt="check" className='size-4'/>
                <p className='font-semibold'>10-15 minutes</p>
              </div>
              <div className='flex items-center gap-2'>
                <img src={check} alt="check" className='size-4'/>
                <p className='font-semibold'>Save time</p>
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Comparison