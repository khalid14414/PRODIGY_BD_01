import { Router } from "express";
import { addUser, getUser,getUserById,deleteUser,updateUser } from "../controller/user.js";

const userRouter = Router()

userRouter.post('/user',addUser)

userRouter.get('/user',getUser)

userRouter.get('/user/:id',getUserById)

userRouter.delete('/user/:id',deleteUser)

userRouter.patch('/user/:id',updateUser)

export default userRouter