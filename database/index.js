import mongoose from "mongoose";

// database connection
export const mongoDB = () => {
    mongoose.connect(`mongodb+srv://mehtasagar437:${process.env.PASSWORD}@datavisualization.rwt7uyd.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}