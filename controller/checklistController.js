// controllers/checklistController.js
import checklistmodel from "../model/checkListModel.js";
import { validationResult } from "express-validator";
// Define controller methods here
const checklistcontroller={
    create:async(req,res)=>
    {
        const checklist=await checklistmodel.create(req.body)
        const errors=validationResult(req)
        if(!errors.isEmpty())
        {
            return res.status(400).json({errors: errors.array()});
        }
        try {
            res.status(201).json({
                message:"checklist created successfully",
                check:checklist
            })
        }
        catch(error){
            next(error);
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
            next(error)
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
           next(error)
        }
    },
    UpdateList:async(req,res)=>
    {
        const updatedlist=await checklistmodel.findByIdAndUpdate(req.params.id,req.body,{set:true})
        try {
            res.status(200).json({
                checklist:updatedlist
            })
        }
        catch(error){
            next(error)
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
            next(error)
        }
    },
}
export default checklistcontroller;