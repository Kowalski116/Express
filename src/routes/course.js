const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// /course/
router.post('/handle-form-actions',courseController.handleFormActions);
router.put('/:id',courseController.update);
router.delete('/:id',courseController.destroy);
router.delete('/:id/force',courseController.forceDestroy);
router.patch('/:id/restore',courseController.restore);
router.post('/store',courseController.store);
router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);

module.exports = router;
