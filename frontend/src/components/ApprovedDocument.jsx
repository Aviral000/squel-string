import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ApprovedDocument() {
const [documents, setDocuments] = useState([]);

useEffect(() => {
    async function fetchDocuments() {
        try {
            const response = await axios.get('/api/documents/');
            setDocuments(response.data);
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    fetchDocuments();
}, [])

const handleApprove = async (documentId) => {
    try {
        await axios.post(`/api/documents/approve/${documentId}`);
        alert('Document approved successfully');
    } catch (error) {
        console.error(error);
        alert(error);
    }
}

  return (
    <div>
      <h2>Document to Approve</h2>
      <ul>
        { documents.map((doc) => (
            <li key={doc._id}>
                {doc.name}
                <button onClick={() => handleApprove(doc._id)}>Approve</button>
            </li>
        ))}
      </ul>
    </div>
  )
}
