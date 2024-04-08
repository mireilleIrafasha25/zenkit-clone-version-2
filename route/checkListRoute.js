// routes/checklistRoutes.js
import checklistcontroller from '../controller/checklistController.js';
import express from 'express';
const routers = express.Router();


// Define checklist routes here
routers.post('/create',checklistcontroller.create)
routers.get('/list',checklistcontroller.List)
routers.get('/getbyID/:id',checklistcontroller.GetCheckList)
routers.delete('/delete/:id',checklistcontroller.DeleteList)
routers.put('/update/:id',checklistcontroller.UpdateList)
export default routers;
