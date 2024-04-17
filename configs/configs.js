import dotenv from "dotenv"

dotenv.config()
const configs=
{
    port:process.env.PORT||3001,
    CLIENT_APP:process.env.CLIENT_APP || 'http://localhost:3001',
    mongoURI:process.env.MONGODB_URI ||"mongodb+srv://mireilleirafasha:Mugisha12345@cluster0.4bfpmyu.mongodb.net/taskApp",
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY,
    JWT_EXPIRES_IN:process.env.JWT_EXPIRES_IN,
    JWT_REFRESH_EXPIRES_IN:process.env.JWT_REFRESH_EXPIRES_IN,
    JWT_REFRESH_COOKIES:process.env.JWT_REFRESH_COOKIE_NAME,
}
export default configs;
