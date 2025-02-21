import React from 'react'
import { HiOutlineStar, HiStar } from "react-icons/hi";
function Dropdown(
    {
        currencies,
    currency,
    setCurrency,
    favorites,
    handleFavorites,
    title=""
    }
) {
    
    const isFav=currency=>favorites.includes(currency)
  return (
    <>
       <div className='mt-1 relative w-full'>
      <label htmlFor={title} className='block text-sm font-medium text-gray-700 mb-2 mt-3'>{title}</label>
      <div className='relative flex items-center w-full'>
        <select 
          value={currency} 
          onChange={(e) => setCurrency(e.target.value)} 
          className='w-full p-3 pr-12 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none sm:text-base text-sm'>
{favorites?.map((currency) => (
  <option className="bg-gray-400" value={currency} key={currency}>
    {currency}
  </option>
))}


{currencies
  ?.filter((c) => !favorites.includes(c))
  .map((currency) => (
    <option value={currency} key={currency}>{currency}</option>
  ))}

        </select>
        <button 
          onClick={() => handleFavorites(currency)} 
          className='absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-indigo-600 transition duration-200 p-1 rounded-md sm:right-3'>
            {isFav(currency)?<HiStar/>:<HiOutlineStar/>}
           
        </button>
      </div>
    </div>
    </>
  )
}

export default Dropdown
