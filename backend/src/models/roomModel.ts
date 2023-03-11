import { Schema, Model, model } from "mongoose";

interface IRoom {
  name: string;
  players: string[];
  isGameStarted: boolean;
}

const roomSchema = new Schema<IRoom>({
  name: { type: String, required: true },
  players: [{ type: String }],
  isGameStarted: { type: Boolean, default: false },
});

const Room: Model<IRoom> = model<IRoom>("Room", roomSchema);

export { IRoom, Room };
