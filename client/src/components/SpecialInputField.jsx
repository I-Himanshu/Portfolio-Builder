import React, { useState, useEffect } from 'react';

const SpecialInputField = ({
    label,
    value = [],
    onChange,
    name,
    options = [],
    getOptionLabel = (option) => option,
    className = '',
    maxSuggestions = 7,
    maxItems = 100,
    tagBgColor = 'bg-primary-500',
    ...rest
}) => {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    console.log(options)
    useEffect(() => {
        const filterOptions = () => {
            if (inputValue.length > 0)
                setFilteredOptions(
                    options.filter((option) => {
                        const optionLabel = getOptionLabel(option).toLowerCase();
                        return (
                            optionLabel.includes(inputValue.toLowerCase()) &&
                            !value.map((v) => v.toLowerCase()).includes(optionLabel)
                        );
                    }).slice(0, maxSuggestions)
                );
        };

        filterOptions();
    }, [inputValue, options, getOptionLabel]);

    const handleKeyDown = (e) => {
        // if the user presses enter or comma or space or tab and the input value is not empty
        if (
            ['Enter', ',', 'Tab', " "].includes(e.key) &&
            inputValue.trim().length > 0
        ) {
            e.preventDefault();
            if(value.length>=maxItems) return;
            if(value.includes(inputValue.trim())) return;
            onChange([...value, inputValue.trim()]);
            setInputValue('');
            setFilteredOptions((prev)=>prev.filter((o)=>o!==inputValue.trim()));
        }
    };

    const handleDeleteItem = (index) => {
        onChange(value.filter((_, i) => i !== index));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSuggestionClick = (option) => {
        onChange([...value, getOptionLabel(option)]);
        setInputValue('');
        setFilteredOptions((prev)=>prev.filter((o)=>o!==option));
    };

    return (
        <div className={`mb-4 ${className}`}>
            <label className={`block text-sm font-semibold text-neutral-700 mb-1`}>
                {label}
            </label>
            <div className="flex flex-wrap gap-2">
                {value.map((item, index) => (
                    <div key={index} className={"text-white px-2 py-1 rounded flex items-center "+tagBgColor }>
                        {item}
                        <button onClick={() => handleDeleteItem(index)} className="ml-2 focus:outline-none">
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                ))}
                <input
                    className={`border border-neutral-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-primary-500 w-full text-neutral-700 placeholder-neutral-400`}
                    type="text"
                    onKeyDown={handleKeyDown}
                    onChange={handleInputChange}
                    value={inputValue}
                    placeholder={"Add an "+ name +" and press Enter"}
                    {...rest}
                />
                {filteredOptions.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {filteredOptions.map((option, index) => (
                            <button
                                key={index}
                                className={"bg-neutral-200 text-neutral-700 px-2 py-1 rounded hover:bg-neutral-300"}
                                onClick={() => handleSuggestionClick(option)}
                            >
                                {getOptionLabel(option)}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpecialInputField;
