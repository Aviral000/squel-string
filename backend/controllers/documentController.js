const documentService = require('../services/documentService');

const uploadDocument = async (req, res) => {
    try {
        const { name } = req.body;
        const path = req.file.path;
        const document = await documentService.uploadDocument(name, path);
        res.status(201).json({ message: "Document uploaded Successfully", document });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getDocument = async (req, res) => {
    try {
        const documents = await documentService.getDocument();
        res.json(documents);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const approveDocument = async (req, res) => {
    try {
        const { documentId } = req.params;
        const document = await documentService.approveDocument(documentId);
        res.json({ message: "Document approved Successfully", document });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { uploadDocument, getDocument, approveDocument }