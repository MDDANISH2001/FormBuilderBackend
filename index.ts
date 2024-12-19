import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import formRoutes from "./routes/formRoutes";
import responseRoutes from "./routes/responseRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/forms", formRoutes);
app.use("/api/responses", responseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
