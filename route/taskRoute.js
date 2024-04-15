// routes/taskRoutes.js

import express from 'express';
const router = express.Router();
import Taskcontroller from '../controller/taskController.js';
import ValidatorName from '../utils/validation.js';

// Define task routes here
router.post('/create',ValidatorName,Taskcontroller.create)
router.get("/list",Taskcontroller.List)
router.get("/getbyId/:id",Taskcontroller.GetTaskbyId)
router.put("/update/:id",Taskcontroller.UpdateTask)
router.delete('/delete/:id',Taskcontroller.DeleteTask)
export default router;
