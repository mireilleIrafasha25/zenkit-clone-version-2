// controllers/taskController.js

import taskModel from "../model/taskModel.js";

// Define controller methods here
const Taskcontroller={
    create:async(req,res)=>
    {
        const checklist=await taskModel.create(req.body)
        try {
            res.status(201).json({
                message:"checklist created successfully",
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
    GetCheckList:async(req,res)=>
    {
        const Task=await taskModel.findById(req.params.id)
        try {
            res.status(200).json({
                check:Task
            })
        }
        catch(error){
            console.log(error.message)
            res.status(500).json({message:"Internal server error"})
        }
    },
    DeleteList:async(req,res)=>
    {
        const deletedtask=await taskModel.findByIdAndDelete(req.params.id)
        try {
            res.status(200).json({
                check:deletedtask
            })
        }
        catch(error){
            console.log(error.message)
            res.status(500).json({message:"Internal server error"})
        }
    },
}
export default Taskcontroller;
