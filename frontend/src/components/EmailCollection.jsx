import SubscribeInput from "./SubscribeInput"

const EmailCollection = () => {
  return (
    <div className='flex flex-col px-7 sm:px-28 py-20 bg-slate-200/50 xl:rounded-2xl'>
      <div className="sm:w-[60%] mx-auto">
        <h3 className='text-3xl text-center font-bold text-black mb-6'>Subscribe Now</h3>
        <p className='text-lg text-center text-black mb-6'>
          Be the first to know when our app launches!
        </p>
        <div className="w-full mx-auto">
            <SubscribeInput />
        </div>
      </div>
    </div>
  )
}

export default EmailCollection