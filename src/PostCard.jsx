import React from 'react';

const PostCard = () => {
  return (


    <div>




    <div className="border ml-2 mt-1 bg-white p-4 rounded-md " style={{ width: '590px' }}>
    <div className='flex w-full flex-row justify-around items-center bg-slate-200 border-b-2'>
            <button className=''>Feed</button>
            <button>Recent</button>
        </div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="text-lg font-semibold">Kushang Nilesh Chaudhari</h3>
          <p className="text-gray-500 text-sm">DY Patil College of Engineering</p>
        </div>
        <button>Follow +</button>
      </div>
      <h2 className="text-xl font-bold mb-2">Cypress - Prompt Pop-up Window</h2>
      <p className="text-gray-700">
Handling Prompt Pop-up Windows in Cypress <br></br>

Automated testing has become a cornerstone of modern web development, <br></br>
ensuring that applications behave as expected. Among the many tools <br></br>
available for this purpose, Cypress stands out due to its ease of use, <br></br>
powerful features, and active community. One of the common challenges <br></br>
faced during web testing is dealing with JavaScript prompt pop-up windows. <br></br>
This article will guide you through the process of handling these <br></br>
prompts in Cypress.</p>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764l-3.468 4.597L16 18l-6-6 4-4zM4 6h16"></path></svg>
          <span className="ml-2">likes</span>
        </div>
        <div className="flex items-center">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9 9 0 01-9-8 9 9 0 019-8z"></path></svg>
          <span className="ml-2">Commcents</span>
        </div>
      </div>


      <div className="relative w-11/12 flex items-center mt-2">
          <img
            src="/assets/logo.png" // Replace this with the actual avatar URL
            alt="Profile Avatar"
            className="w-8 h-8 rounded-full absolute left-3"
          />
          <input
            type="text"
            className="w-full border border-gray-300 p-2 pl-12 rounded-xl"
            placeholder="Add a Comment"
          />
        </div>


    </div>

    </div>
  );
};

export default PostCard;
