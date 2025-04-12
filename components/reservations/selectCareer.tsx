import { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";

const SelectDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    value: "doctors",
    label: "All Doctors",
  });

  const options = [
    {
      value: "doctors",
      label: "All Doctors",
    },
    {
      value: "completed",
      label: "Pharmacists",
    },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: typeof selectedOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full md:w-44">
      {/* Selected Value Display */}
      <button
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between py-1.5 px-2 border border-gray-300 rounded-lg bg-white hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
      >
        <div className="flex items-center space-x-2">
          <FaUserDoctor className="text-gray-400" />
          <span className="text-gray-500 text-[14px] font-semibold">
            {selectedOption.label}
          </span>
        </div>
        <FiChevronDown
          className={`text-gray-500 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedOption.value === option.value ? "bg-teal-50" : ""
              }`}
            >
              <span className="text-gray-700 text-[14px]">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
