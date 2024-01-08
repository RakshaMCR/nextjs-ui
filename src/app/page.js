// pages/index.js

"use client"
import React, { useEffect, useState } from 'react';

const UploadPage = () => {
  const [selection, setSelection] = useState(null);
  const [file, setFile] = useState(null);
  const [githubRepo, setGithubRepo] = useState('');
  const [error, setError] = useState(null);

  const handleSelectionChange = (value) => {
    setSelection(value);
    setError(null);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setError(null);
  };

  const handleGithubRepoChange = (event) => {
    setGithubRepo(event.target.value);
    setError(null);
  };

  const handleSubmit = async() => {
    // Handle the submission based on the user's selection
    setError(null);
    if (selection === 'local files') {
      // Handle file upload logic
      const formData = new FormData();
      formData.append('file',file);
      try {
        const response = await fetch('/', 
        { 
          method: 'POST',
          body: formData,
        });
        //Handle the response as needed
        const data = await response.json();
        console.log('Response data: ', data); 
        setError('The File generated successfully.'); 
      } 
      catch (error) {
        console.error('Error uploading file:', error);
        setError('An Error occured. Please try again.');
      }
    }

      else if (selection === 'github') {
        // Handle GitHub repository logic
        try{
          const response = await fetch('/');
          const data = await response.json();
          console.log('Response data:', data);
          setError('The File generated successfully.');
        }
        catch (error) {
          console.error('Error uploading Github repository:', error);
          setError('An Error occured. Please try again.');
        }
      }
    }; 

  return (
  
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
    <img src="https://cloud2data.com/wp-content/uploads/2023/04/AI-18-1536x1024.jpg" alt="Background Image" className="w-full h-full object-cover" />
    </div>
    <div className="relative z-10">
      <h1 className= "text-5xl font-bold mb-8 text-white">AI CODE DOCUMENTATION AGENT</h1>

      <div className="mb-4"></div>
      <div className="mb-4 text-center flex flex-col items-center">
        <label className= "text-lg font-bold mb-4 text-white">UPLOAD FILE:</label>
        <div className="grid grid-cols-3 gap-4 content-center">
        <select className="col-span-3 p-2 border rounded" onChange={(e) => handleSelectionChange(e.target.value)}>
          <option value="">Choose an option</option>
          <option value="local files">Upload from the device</option>
          <option value="github">GitHub Repository</option>
        </select>
        </div>
      </div>

      {selection === 'local files' && (
        <div className="mb-4 text-center">
          <label className="text-lg font-bold mb-4 text-white">Upload from the device: </label>
          <input type="file" className="block mb-4 border rounded mx-auto" 
          onChange={handleFileChange} />
        </div>
      )}

      {selection === 'github' && (
        <div>
          <label className="text-lg font-bold mb-4 text-white">GitHub Repository: </label>
          <input
            className="block mb-4 border rounded mx-auto"
            type="text"
            placeholder="Enter GitHub repository location"
            value={githubRepo}
            onChange={handleGithubRepoChange}
          />
        </div>
      )}

      <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Submit</button>
      {error && <div style={{ color: 'red'}}>{error}</div>}
    </div>
    </div>
  );
};

export default UploadPage;
