'use server'

import User from "@/models/userModel"
import connectMongo from "@/dbconfig/dbConnect"

export default async function getUsers() {
    try {
        await connectMongo();
        const userData = await User.find()
        return {status: true, message: "GET", data: userData}
    } catch (error) {
        return {status: false, message: error.message}
    }
}