// controllers/taskController.js

import taskModel from "../model/taskModel.js";

// Define controller methods here
const Taskcontroller={
    create:async(req,res)=>
    {
        const checklist=await taskModel.create(req.body)
        try {
            res.status(201).json({
                message:"task created successfully",
                check:checklist
            })
        }
        catch(error){
            console.log(error.message)
            res.status(500).json({message:"Internal server error"})
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
            console.log(error.message)
            res.status(500).json({message:"Internal server error"})
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
            console.log(error.message)
            res.status(500).json({message:"Internal server error"})
        }
    },
    UpdateTask:async(req,res)=>
    {
        const updatedTask=await taskModel.findByIdAndUpdate(req.params.id,req.body,{set:true})
        try {
            res.status(200).json({
                check:updatedTask
            })
        }
        catch(error){
            console.log(error.message)
            res.status(500).json({message:"Internal server error"})
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
            console.log(error.message)
            res.status(500).json({message:"Internal server error"})
        }
    },
}
export default Taskcontroller;
