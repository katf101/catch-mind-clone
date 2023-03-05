import express from "express";
import cors from "cors";
// import helmet from "helmet";
// import morgan from "morgan";
// import { json, urlencoded } from "body-parser";
// import { authRoutes, gameRoutes, lobbyRoutes, userRoutes } from "./routes";

const app = express();

// Middlewares
app.use(cors());
// app.use(helmet());
// app.use(morgan("combined"));
// app.use(json());
// app.use(urlencoded({ extended: true }));

// Routes
// app.use("/auth", authRoutes);
// app.use("/games", gameRoutes);
// app.use("/lobbies", lobbyRoutes);
// app.use("/users", userRoutes);

export default app;
