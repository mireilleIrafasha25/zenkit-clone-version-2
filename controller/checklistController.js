// controllers/checklistController.js

import checklistmodel from "../model/checkListModel.js";

// Define controller methods here
const checklistcontroller={
    create:async(req,res)=>
    {
        const checklist=await checklistmodel.create(req.body)
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
        const list=await checklistmodel.find()
        try {
            res.status(200).json({
                check:list
            })
        }
        catch(error){
            console.log(error.message)
            res.status(500).json({message:"Internal server error"})
        }
    },
    GetCheckList:async(req,res)=>
    {
        const listItem=await checklistmodel.findById(req.params.id)
        try {
            res.status(200).json({
                check:listItem
            })
        }
        catch(error){
            console.log(error.message)
            res.status(500).json({message:"Internal server error"})
        }
    },
    DeleteList:async(req,res)=>
    {
        const deletedlist=await checklistmodel.findByIdAndDelete(req.params.id)
        try {
            res.status(200).json({
                check:deletedlist
            })
        }
        catch(error){
            console.log(error.message)
            res.status(500).json({message:"Internal server error"})
        }
    },
}
export default checklistcontroller;