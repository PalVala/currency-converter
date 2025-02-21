import React, { useEffect, useState } from 'react';
import Dropdown from './dropdown';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

function InputBox() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('INR');
  const [to, setTo] = useState('USD');
  const [result, setResult] = useState(null);
  const [converting, setConverting] = useState(false);
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem('fav')) || ['INR']);

  const fetchCurrencies = async () => {
    try {
      const res = await fetch('https://api.frankfurter.app/currencies');
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error('error fetching', error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const convert = async () => {
    try {
      if (!amount) return;
      setConverting(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
      );
      const data = await res.json();
      setResult(data.rates[to] + ' ' + to);
    } catch (error) {
      console.error('error fetching', error);
    } finally {
      setConverting(false);
    }
  };

  const handleFavorites = (currency) => {
    let update = [...fav];
    if (update.includes(currency)) {
      update = update.filter((c) => c !== currency);
    } else {
      update.push(currency);
    }
    setFav(update);
    localStorage.setItem('fav', JSON.stringify(update));
  };

  const swapCurrency = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="max-w-2xl w-full mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700 text-center">
        Currency Converter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <Dropdown
          currencies={currencies}
          title="FROM"
          handleFavorites={() => handleFavorites(from)}
          currency={from}
          setCurrency={setFrom}
          favorites={fav}
        />
        <div className="flex justify-center">
          <button
            onClick={swapCurrency}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <HiOutlineSwitchHorizontal size={20} />
          </button>
        </div>
        <Dropdown
          currencies={currencies}
          title="TO"
          handleFavorites={() => handleFavorites(to)}
          currency={to}
          setCurrency={setTo}
          favorites={fav}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={convert}
          className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
            converting ? 'animate-pulse' : ''
          }`}
        >
          Convert
        </button>
      </div>
      {result && (
        <div className="mt-4 text-lg font-medium text-right text-green-400">
          Converted amount: {result}
        </div>
      )}
    </div>
  );
}

export default InputBox;