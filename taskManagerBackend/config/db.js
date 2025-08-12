import mongoose from "mongoose";

// Updated function to connect to the database
export const connectDB = async () => {
    try {
        // Ye line ab aapke Render ke Environment Variable (MONGODB_URI) se URL legi.
        // Aapke local machine par ye .env file se URL legi.
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        // Connection safal hone par ek behtar success message
        console.log(`DB CONNECTED SUCCESSFULLY: ${conn.connection.host}`);

    } catch (error) {
        // Connection fail hone par ye error dikhayega, jisse problem samajhne mein aasani hogi.
        console.error(`Error connecting to DB: ${error.message}`);
        
        // Agar database se connect nahi ho pata hai, to server ko band kar dega.
        process.exit(1); 
    }
};