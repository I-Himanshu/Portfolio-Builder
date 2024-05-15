import React, { useEffect, useRef, useState } from 'react'
import Terminal from '../TERMINAL/Terminal'
import Resume from '../RESUME/Resume';
import NandanResumePreview from '../RESUME/NandanResumePreview';

const Preview = ({
  profile
}) => {
  const USER = profile;

  const terminalRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(true);
  return (
    <div className="preview p-2 bg-primary-100 text-white">
      {

        USER ?
          (USER?.type == 'portfolio') ? <Terminal
            USER={profile}
            terminalRef={terminalRef}
            userName={USER.name}
            theme={USER.theme}
            setTerminalOpen={setTerminalOpen}
            isLoading={[
              isLoading,
              setIsLoading,
              10
            ]}
            className={"w-full min-w-full"}
          /> : <NandanResumePreview USER={USER} />
          : <h2 className="text-2xl font-bold text-primary-700">Preview will be shown here</h2>
      }
    </div>
  )
}

export default Preview