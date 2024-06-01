import mongoose from "mongoose";
const DB = 'mongodb://localhost:27017/food_del'
export const connectDB = async () => {
     await mongoose.connect(DB)
          .then(() => { console.log('Connected to database') })
          .catch((err) => { console.log(err) })
};
// export const connectDB = async () => {
//      await mongoose.connect('mongodb+srv://dipanshuuk711:xwra948uju@cluster0.tore4ff.mongodb.net/food-del')
//           .then(() => { console.log('Connected to database') })
//           .catch((err) => { console.log(err) })
// };

