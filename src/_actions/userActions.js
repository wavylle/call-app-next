'use server'

import User from "@/models/userModel"
import connectMongo from "@/dbconfig/dbConnect"

export async function getUsers() {
    try {
        await connectMongo();
        const userData = await User.find()
        return {status: true, message: "GET", data: userData}
    } catch (error) {
        return {status: false, message: error.message}
    }
}

export async function createUser() {
    try {
        await connectMongo()
        const createUserData = {
            name: "Abhirath Dubey",
            company: "ProductAssist",
            email: "abhirathdubey2804@gmail.com",
            password: "Abhi@2002"
        }
        const createuser = await User.create(createUserData)
        return {status: true, message: "User created successfully"}
    } catch (error) {
        return {status: false, message: error.message}
    }
}