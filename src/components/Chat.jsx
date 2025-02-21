import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import Dropdown from './dropdown'

const Chat = ({ currencies, from, setFrom, to, setTo, amount, setAmount, convert, handlefavorites }) => {
  return (
    <div className='max-w-2xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-200'>
      <h2 className='mb-6 text-3xl font-bold text-gray-800 text-center'>Currency Converter</h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 items-center'>
        <Dropdown currencies={currencies} title="FROM" handlefavorites={handlefavorites} currency={from} setCurrency={setFrom} />
        
        <div className='flex justify-center'>
          <button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-200 shadow-sm' title='Swap currencies'>
            <HiOutlineSwitchHorizontal size={24} className='text-gray-600' />
          </button>
        </div>
        
        <Dropdown currencies={currencies} title="TO" handlefavorites={handlefavorites} currency={to} setCurrency={setTo} />
      </div>
      
      <div className='mt-6'>
        <label htmlFor="amount" className='block text-sm font-medium text-gray-700'>Amount</label>
        <input 
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number" 
          placeholder="Enter amount"
          className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
      </div>
      
      <div className='flex justify-center mt-6'>
        <button 
          onClick={convert} 
          className='px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          Convert
        </button>
      </div>
      
      <div className='mt-6 text-lg font-semibold text-center text-green-500'>
        Converted Amount: 78 USD
      </div>
    </div>
  );
};

export default Chat;
