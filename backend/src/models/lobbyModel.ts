import { Schema, model } from "mongoose";

interface ILobby {
  name: string;
  players: string[];
  isGameStarted: boolean;
}

const lobbySchema = new Schema<ILobby>({
  name: { type: String, required: true },
  players: [{ type: String }],
  isGameStarted: { type: Boolean, default: false },
});

const Lobby = model<ILobby>("Lobby", lobbySchema);

export { ILobby, Lobby };
