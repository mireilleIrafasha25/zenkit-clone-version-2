import { json } from "express";
const errorHandler =(err,req,res,next)=>
{
    const errstatus=err.statuscode || 500;
    const errmessage=err.message ||"Internal Server Error";
    res.status(errstatus).json({
        success: false,
        status: errstatus,
        message: errmessage,
        stack: process.env.NODE_ENV=="development"? err.stack:{}

    });

    next();
}
export default errorHandler;