import React from 'react'
import Resume from './Resume'

const NandanResumePreview = ({USER}) => {
  return (
    <div className="container mx-auto bg-gray-300 shadow-lg rounded-lg w-full h-full">
        <Resume USER={USER} />
    </div>
  )
}

export default NandanResumePreview