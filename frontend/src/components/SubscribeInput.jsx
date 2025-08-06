import { useState } from 'react';
import useMailchimpSubscribe from '../hooks/useMailchimpSubscribe';

const SubscribeInput = () => {
  const [email, setEmail] = useState('');
  const { subscribe, loading, error, success } = useMailchimpSubscribe();

  const handleSubscribe = (e) => {
    e.preventDefault()
    subscribe(email)    
    setEmail('')
  };

  return (
    <form onSubmit={handleSubscribe}>
       <div className='flex border border-gray-300 rounded-lg outline-none overflow-hidden'> 
          <input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-3 outline-none'
          />
          <button type='submit' disabled={!email.trim() || loading} className='bg-[#13a2f5] px-3 text-white'>
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>

      {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
      {success && <div className='text-green-500 text-center mt-4'>Thank you for subscribing!</div>}
    </form>
  );
};

export default SubscribeInput;
