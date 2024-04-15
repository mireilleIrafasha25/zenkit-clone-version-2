import  {body} from "express-validator";
 const checkValidation=[body("description").notEmpty().withMessage("Description must be required")];
export default checkValidation;