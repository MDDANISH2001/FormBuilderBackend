import mongoose, { Document } from "mongoose";

const responseSchema = new mongoose.Schema(
  {
    questionId: { type: String, required: true },
    userId: { type: String, required: true },
    categorize: { type: mongoose.Schema.Types.Mixed, default: {} },
    cloze: { type: mongoose.Schema.Types.Mixed, default: {} },
    comprehension: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

interface IResponse extends Document {
  title: string;
  userId: string;
  categorize: Record<string, any>;
  cloze: Record<string, any>;
  comprehension: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const Response = mongoose.model<IResponse>("Response", responseSchema);
export default Response;
