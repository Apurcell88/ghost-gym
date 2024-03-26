import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const trainerSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  age: Number,
  sex: String,
  yearsExperience: Number,
  email: String,
  aboutMe: String,
});

const Trainer =
  mongoose.models.Trainer || mongoose.model("Trainer", trainerSchema);

export default Trainer;
