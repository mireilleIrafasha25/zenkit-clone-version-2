import CustomError from "./customError.js";

export class notfound extends CustomError
{
/**
 * creates a new NotFound error instance.
 * @param {String} message - The Error message.
 */
constructor(message)
{
    super(message)
    /**
     * HTTP status code for this error.
     * @type {number}
     */
    this.status = 404
    /**
     * Error name.
     * @type {string}
     */
    this.name = "notfound"
}
}