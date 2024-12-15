import { v4 as uuidv4 } from "uuid"


let user = []
export const addUser = (req, res, next) => {
    try {
        const { name, email, age } = req.body

        const isValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        if (!isValid(email)) {
            return res.status(400).json({ error: "Invalid email" })
        }
        let userInfo = {
            id: uuidv4(),
            name,
            email,
            age
        }

        user.push(userInfo)
        // console.log(userInfo)
        res.status(201).json(userInfo)
    } catch (error) {
        next(error)
    }
}

export const getUser = (req, res, next) => {
    try {
        const info = user
        res.status(200).json(info)
    } catch (error) {

    }
}

export const getUserById = (req,res,next)=>{
    try {
        const {id} = req.params
        const info = user.find(user=>user.id===id)
        if (!info) {
            return res.status(404).json({ error: "User not found" })
        }
        res.status(200).json(info)
    } catch (error) {
        next(error)
    }
}

export const updateUser = (req, res, next) => {
    try {
       const {id} =req.params
       const {name,email,age}= req.body
       const info = user.find(user=>user.id===id) 
       if (!info) {
           return res.status(404).json({ error: "User not found" })
       }

       info.name = name
       info.email = email
       info.age = age
       res.status(200).json(info)
    } catch (error) {
       next (error) 
    }
}

export const deleteUser = (req, res, next) => {
    try {
        const {id} = req.params
        const info = user.find(user=>user.id===id)
        if (!info) {
            return res.status(404).json({ error: "User not found" })
        }
        user = user.filter(user => user.id !== id)
        res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        next(error)
    }
}