import React, { useState } from 'react';
import './DocumentLibrary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpload,
  faCodeBranch,
  faTags,
} from '@fortawesome/free-solid-svg-icons';

const DocumentUpload = ({ handleUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      handleUpload(selectedFile);
      setSelectedFile(null);
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div className="DocumentUpload">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
};

const DocumentLibrary = () => {
  const [showUpload, setShowUpload] = useState(false);
  const handleUpload = (file) => {
    // Perform the upload logic here, such as sending the file to a server or storing it in a database
    console.log('Uploading file:', file.name);
  };

  const handleModuleClick = () => {
    setShowUpload(true);
  };

  return (
    <div className="Document">
      <div className="Storage" onClick={handleModuleClick}>
        <FontAwesomeIcon icon={faUpload} />
        <h3>Upload and Storage</h3>
      </div>
      {showUpload && <DocumentUpload handleUpload={handleUpload} />}
      <div className="Version">
        <FontAwesomeIcon icon={faCodeBranch} />
        <h3>Version Control and Document Revision History</h3>
      </div>
      <div className="Tagging">
        <FontAwesomeIcon icon={faTags} />
        <h3>Document Categorization and Tagging</h3>
      </div>
    </div>
  );
};

export default DocumentLibrary;
