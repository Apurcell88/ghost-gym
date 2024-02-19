import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const clientSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  age: Number,
  phoneNumber: String,
  email: String,
  fitnessGoals: String,
  restrictions: String,
});

const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);

export default Client;
