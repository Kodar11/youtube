import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req,res) => {
    const {username,email,fullname,password} = req.body
    console.log("email : ",email)
    console.log(req.body)

    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

})

export {registerUser}