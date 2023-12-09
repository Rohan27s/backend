import express from "express";
const router = express.Router();
import EventController from "../controllers/eventcontroller.js";

router.post('/addnew',EventController.addnew)
router.get('/allevent',EventController.allevent)
router.get('/event/:id',EventController.eventget)
// router.get('/:id',ProductController.getSingleDocById)
// router.put('/:id',ProductController.updateDocById)
// router.delete('/:id',ProductController.dltDocById)

export default router