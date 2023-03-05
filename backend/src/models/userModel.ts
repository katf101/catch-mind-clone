import { Schema, model } from "mongoose";

interface IUser {
  username: string;
  password: string;
  score: number;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  score: { type: Number, default: 0 },
});

const User = model<IUser>("User", userSchema);

export { IUser, User };
