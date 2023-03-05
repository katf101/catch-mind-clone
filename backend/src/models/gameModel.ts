import { Schema, model } from "mongoose";

interface IGuess {
  user: string;
  guess: string;
}

interface IGame {
  lobbyId: string;
  currentRound: number;
  currentDrawer: string;
  word: string;
  guesses: IGuess[];
  correctGuesses: string[];
}

const gameSchema = new Schema<IGame>({
  lobbyId: { type: String, required: true },
  currentRound: { type: Number, required: true },
  currentDrawer: { type: String, required: true },
  word: { type: String, required: true },
  guesses: [{ user: String, guess: String }],
  correctGuesses: [{ type: String }],
});

const Game = model<IGame>("Game", gameSchema);

export { IGame, Game };
