import express from 'express';
import HobbiesController from '../controllers/hobbyControllers.js';
const router = express.Router();

// delete a specified hobby 
router.delete('/', HobbiesController.deleteHobby);

export default router;
