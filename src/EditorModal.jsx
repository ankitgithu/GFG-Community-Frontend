import React from 'react';

const EditorModal = () => {
  return (
    <div>
      <div className="h-28 flex flex-col justify-center items-center bg-white mt-2 ml-2" style={{ width: '590px' }}>
        <div className="relative w-11/12 flex items-center">
          <img
            src="/assets/logo.png" // Replace this with the actual avatar URL
            alt="Profile Avatar"
            className="w-8 h-8 rounded-full absolute left-3"
          />
          <input
            type="text"
            className="w-full border border-gray-300 p-2 pl-12 rounded-xl"
            placeholder="Write a Post..."
          />
        </div>
        <br></br>
        <div className='flex w-full flex-row justify-around items-center'>
            <button>Share Your Thoughts</button>
            <button>Share Experience</button>
        </div>
      </div>
    </div>
  );
};

export default EditorModal;
