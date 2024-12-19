// formModel.ts
import mongoose, { Document, ObjectId } from "mongoose";

const formSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    headerImage: { type: String, default: "" },
    categorize: { type: mongoose.Schema.Types.Mixed, default: {} },
    cloze: { type: mongoose.Schema.Types.Mixed, default: {} },
    comprehension: { type: mongoose.Schema.Types.Mixed, default: {} },
    userId: { type: String, require: true },
  },
  { timestamps: true }
);

interface IForm extends Document {
  title: string;
  headerImage?: string;
  categorize: Record<string, any>;
  cloze: Record<string, any>;
  comprehension: Record<string, any>;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const Form = mongoose.model<IForm>("Form", formSchema);
export default Form;
