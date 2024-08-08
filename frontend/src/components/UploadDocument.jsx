import axios from 'axios';
import React, { useState } from 'react'

export default function UploadDocument() {
const [file, setFile] = useState(null);

const handleFileChange = (e) => {
    setFile(e.target.files[0]);
}

const handleUpload = async () => {
    const formData = new FormData();
    formData.append('document', file);

    try {
        await axios.post('/api/documents/upload', formData);
        alert('Document uploaded successfully');
    } catch (error) {
        console.error(error);
        alert(error);
    }
}

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}
