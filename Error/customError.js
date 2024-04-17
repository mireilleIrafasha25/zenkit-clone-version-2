/**
 * customError is a custom error class that extends the built-in Error Class.
 * It allows for creating custom error messages and can be used to throw custom errors.
 * @constructor
 * @param {string} message - The error message to be displayed when error is thrown.
 */
export default class CustomError extends Error {
    /**
     * constructor for CustomError.
     * @param {String} message - The error message to be displayed  is thrown.
     */
     constructor(message) {
        //call the superclass constructor with the provided error message.
        super(message);
     }
    }