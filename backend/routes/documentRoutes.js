const router = require('express').Router();
const roleMiddleware = require('../middlewares/roleMiddleware');
const documentController = require('../controllers/documentController');

router.post('/upload', roleMiddleware(['A']), documentController.uploadDocument);
router.get('/', documentController.getDocument);
router.post('/approve/:documentID', roleMiddleware(['B']), documentController.approveDocument);

module.exports = router