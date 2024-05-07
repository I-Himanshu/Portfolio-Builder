import React from 'react';

const InputField = ({
  label,
  value,
  onChange,
  name,
  type = 'text',
  options = [],
  className = '',
  labelClassName = '',
  inputClassName = '',
}) => {
  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            className={`border border-neutral-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-primary-500 w-full text-neutral-700 placeholder-neutral-400 ${inputClassName}`}
            name={name}
            value={value}
            onChange={onChange}
            placeholder="Enter your text"
          />
        );
      case 'select':
        return (
          <select
            className={`border border-neutral-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-primary-500 w-full text-neutral-700 placeholder-neutral-400 ${inputClassName}`}
            name={name}
            value={value}
            onChange={onChange}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <div>
            {options.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  onChange={onChange}
                  checked={value === option.value}
                  className="mr-2 text-primary-500 focus:ring-primary-500"
                />
                <label className="text-neutral-700">{option.label}</label>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <input
            className={`border border-neutral-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-primary-500 w-full text-neutral-700 placeholder-neutral-400 ${inputClassName}`}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder="Enter your text"
          />
        );
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label className={`block text-sm font-semibold text-neutral-700 mb-1 ${labelClassName}`}>
        {label}
      </label>
      {renderInput()}
    </div>
  );
};

export default InputField;