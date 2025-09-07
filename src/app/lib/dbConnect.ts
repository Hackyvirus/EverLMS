import mongoose from "mongoose";

let isConnected = false;

export interface connection {
    status?: string
}

async function DBConnect() {
    if (isConnected) {
        console.log("DB already Connected !")
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI || "")
        isConnected = db.connections[0].readyState === 1
        console.log("DB Connected !")
        
    } catch (error) {
        console.log("Connection error",error);
        process.exit(1);
    }

}

export default DBConnect;