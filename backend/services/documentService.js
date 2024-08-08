const Document = require("../models/Document");

const uploadDocument = async (name, path) => {
    const document = new Document({ name, path });
    await document.save();
    return document;
}

const getDocument = async () => {
    return await Document.find();
}

const approveDocument = async (documentId) => {
    const document = await Document.findById(documentId);

    if(!document) {
        throw new Error('Document not found');
    }

    document.approved = true;
    await document.save();

    return document;
}

module.exports = { uploadDocument, getDocument, approveDocument }