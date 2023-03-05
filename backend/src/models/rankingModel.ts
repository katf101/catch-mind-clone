import { Schema, model } from "mongoose";

interface IRanking {
  user: string;
  score: number;
}

const rankingSchema = new Schema<IRanking>({
  user: { type: String, required: true },
  score: { type: Number, required: true },
});

const Ranking = model<IRanking>("Ranking", rankingSchema);

export { IRanking, Ranking };
