 // App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log(selectedFile);
  };

  return (
    <div className="App">
      <h1>Transportation Image Object Detection</h1>
      <div className="upload-container">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Image</button>
      </div>

      {selectedFile && (
        <div className="image-preview-container">
          <h2>Selected Image:</h2>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded"
            className="image-preview"
          />
        </div>
      )}
    </div>
  );
}

export default App;
