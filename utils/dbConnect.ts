import mongoose from "mongoose";

const dbConnect = async () => {
        await mongoose.connect('mongodb://localhost:27017/NextJS_DB_POC');
};

export default dbConnect;