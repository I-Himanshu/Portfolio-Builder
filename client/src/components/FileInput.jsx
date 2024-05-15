import React from 'react';

export const FileInput = ({ label, id="file", file, setFile, maxSize = 5, maxSizeUnit = 'MB', accept = 'application/pdf' }) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    // Check if a file is selected
    if (selectedFile) {
      // Check file type
      if (selectedFile.type === accept) {
        // Check file size
        const maxSizeInBytes = maxSize * 1024 * 1024; // Convert to bytes
        if (selectedFile.size <= maxSizeInBytes) {
          setFile(selectedFile);
        } else {
          alert(`File size exceeds ${maxSize}${maxSizeUnit}. Please select a smaller file.`);
        }
      } else {
        alert(`Please select a file with the following type: ${accept}.`);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <label htmlFor={id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        {label}
      </label>
      <input id={id} type="file" className="hidden" onChange={handleFileChange} />
    </div>
  );
};

export default FileInput;