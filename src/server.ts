import "reflect-metadata";
import "./shared/container";
import express from "express";
import dotenv from "dotenv";
import { userRoutes } from "./modules/user/infra/http/routes/index";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Health check OK");
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
