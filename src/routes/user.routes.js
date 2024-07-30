import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlerwares.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name : "avatar",
            maxCount:1
        },
        {
            name : "coverImage",
            maxCount:1
        }
    ]),
    
   await registerUser)

export default router