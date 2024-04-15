import dotenv from "dotenv"

dotenv.config()
const configs=
{
    port:process.env.PORT||3001,
    mongoURI:process.env.MONGODB_URI||"mongodb://localhost:27017/taskApp"
}
export default configs;
