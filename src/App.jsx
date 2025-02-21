import React from 'react';
import InputBox from './components/InputBox';

function App() {
  return (
    <>
      <div 
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/009/731/417/small_2x/growing-chart-against-the-background-of-the-usa-america-flag-candlestick-graph-stock-market-exchange-and-graph-chart-business-finance-money-investment-on-display-board-design-vector.jpg')" }}
      >
        <InputBox />
      </div>
    </>
  );
}

export default App;
