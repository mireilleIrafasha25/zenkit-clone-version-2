import { json } from "express";
/**
 * Error handling middleware function.
 * 
 * @param {Error} err - The error object to be handled.
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {Function} next - The next middleware function in stack.
 * 
 * @returns {object} - A JSON object containing the error details.
 * 
 * @description This middleware function is responsible for handling errors that occur during the executionof the application.
 * It extracts the error status code and message , if available, or defaults to 500 and "Internal Server Error" respectively.
 * The function then sends a aJSON response with the error details to the client.
 * If the application is running in a development environment,the stack trace of error is also included in the response.
 */
const ErrorHandler =(err,req,res,next)=>
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
export default ErrorHandler;