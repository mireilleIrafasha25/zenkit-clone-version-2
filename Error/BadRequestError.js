import CustomError from "./customError.js";

/**
 * custom error class for handling bad request errors.
 * @extends {CustomError} -Extends the customError class.
 */
export class BadRequestError extends CustomError{
    /**
     * Creates an instance of BadRequestError.
     * @param {string} message - The error message to be displayed.
     * @memberof BadRequestError
     */
    constructor(message){
        /**
         * @param {string} message - The error message to be displayed.
         */
        super(message,400);
        /**
         * Set the HTTP status code for this error to 400.
         */
        this.statusCode=400;
    }
}