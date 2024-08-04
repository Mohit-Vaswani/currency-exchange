import { useState } from "react";

const ConversionApp = () => {
  const [usd, setUsd] = useState(0);
  const [inr, setInr] = useState(0);
  const conversionRate = 82.5;

  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const usdValue = parseFloat(e.target.value);
    setUsd(usdValue);
    setInr(usdValue * conversionRate);
  };

  const handleInrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inrValue = parseFloat(e.target.value);
    setInr(inrValue);
    setUsd(inrValue / conversionRate);
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">USD to INR Converter</h2>
      <div className="flex flex-col mb-4">
        <label className="mb-2">USD:</label>
        <input
          type="number"
          value={usd}
          onChange={handleUsdChange}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2">INR:</label>
        <input
          type="number"
          value={inr}
          onChange={handleInrChange}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default ConversionApp;