// controllers/taskController.js

import taskModel from "../model/taskModel.js";
import { validationResult } from "express-validator";
// Define controller methods here
const Taskcontroller={
    create:async(req,res)=>
    {
        const checklist=await taskModel.create(req.body)
        const error=validationResult(req);
        if(!error.isEmpty()) {
             return res.status(400).json({errors:error.array()})
        }
        try {
            res.status(201).json({
                message:"task created successfully",
                check:checklist
            })
        }
        catch(error){
            next(error)
        }
    },
    List:async(req,res)=>
    {
        const task=await taskModel.find()
        try {
            res.status(200).json({
                Task:task
            })
        }
        catch(error){
           next(error)
        }
    },
    GetTaskbyId:async(req,res)=>
    {
        const Task=await taskModel.findById(req.params.id)
        try {
            res.status(200).json({
                task:Task
            })
        }
        catch(error){
           next(error)
        }
    },
    UpdateTask:async(req,res,next)=>
    {
        const updatedTask=await taskModel.findByIdAndUpdate(req.params.id,req.body,{set:true})
        try {
            res.status(200).json({
                check:updatedTask
            })
        }
        catch(error){
            next(error)
        }
    },
    DeleteTask:async(req,res)=>
    {
        const deletedtask=await taskModel.findByIdAndDelete(req.params.id)
        try {
            res.status(200).json({
                task:deletedtask
            })
        }
        catch(error){
            next(error)
        }
    },
}
export default Taskcontroller;
