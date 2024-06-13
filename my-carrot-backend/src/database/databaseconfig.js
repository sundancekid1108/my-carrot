import mongoose from 'mongoose';
import dotenv from 'dotenv';
mongoose.Promise = global.Promise;
dotenv.config()


// 업데이트되고 사용 안하는 설정
mongoose.set('strictQuery', false)

const MONGO_URL = process.env.MONGO_URL

const DatabaseConnect = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            autoIndex: true,
            // econnectTries: 5
        })
        console.log('Connected to Mongodb Atlas');
    } catch (error) {
        console.log("Failed to Connect Mongodb Atlas", error);
    }

    mongoose.connection.on('error', (error) => {
        console.log('Database Connection error', error);
    });
    mongoose.connection.on('disconnected', () => {
        console.log('Database Connection error, try to reconnect');
        // setInterval(DatabaseConnect(), 20000);
    });

}


export default DatabaseConnect; 