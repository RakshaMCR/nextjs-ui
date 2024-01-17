import React from 'react';

function Upload() {
  return(
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
    <img src="https://cloud2data.com/wp-content/uploads/2023/04/AI-18-1536x1024.jpg" alt="Background Image" className="w-full h-full object-cover"></img>
    </div>
    <div className="relative z-10">
    <h1 className="text-5xl font-bold mb-8 text-white">Success!</h1>
    <p className="text-lg font-bold mb-4 text-white">Your file has been successfully generated.</p>
    <a href = "./app/page.js" download>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
        Download Document
      </button>
    </a>
    </div>
</div>
  );
};
export default Upload;