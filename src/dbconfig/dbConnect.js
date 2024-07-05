import mongoose from "mongoose"

const connectMongo = async () => {
    if(mongoose.connections[0].readyState) {
        return true
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB Connected")
        return true
    } catch (error) {
        throw new Error("Error in connecting to database")
    }
}

export default connectMongo
