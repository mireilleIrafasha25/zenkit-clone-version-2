import  {body} from "express-validator";
 const ValidatorName=[body("title").notEmpty().withMessage("Title must be required")];
export default ValidatorName;
