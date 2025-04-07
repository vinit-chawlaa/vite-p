import React, { useState } from "react";

const Tip = () => {
  const [value, setValue] = useState(0);
  const [tip, setTip] = useState(0);
  const [inputs, setInputs] = useState({
    item1: "",
    item2: "",
    item3: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCal = () => {
    const total =
      (parseFloat(inputs.item1) || 0) +
      (parseFloat(inputs.item2) || 0) +
      (parseFloat(inputs.item3) || 0);
    setValue(total);
    setTip(total * 0.1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Tip Calculator 💰
        </h1>

        {/* Input Fields */}
        {["item1", "item2", "item3"].map((item, index) => (
          <div key={index} className="mb-4">
            <label className="block font-semibold text-gray-700">
              Item {index + 1}
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              value={inputs[item]}
              onChange={handleChange}
              name={item}
              placeholder={`Enter price of item ${index + 1}`}
            />
          </div>
        ))}

        {/* Calculate Button */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 rounded-lg transition-all"
          onClick={handleCal}
        >
          Calculate Total
        </button>

        {/* Results */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
          <h2 className="text-lg font-semibold">
            Total Amount:{" "}
            <span className="text-blue-600 font-bold">₹{value.toFixed(2)}</span>
          </h2>
          <h2 className="text-lg font-semibold mt-2">
            Tip (10%):{" "}
            <span className="text-green-600 font-bold">₹{tip.toFixed(2)}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Tip;
