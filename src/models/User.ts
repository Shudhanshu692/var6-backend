import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  age: number;
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<IUser>("User", UserSchema);
