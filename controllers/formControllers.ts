import { Request, RequestHandler, Response } from "express";
import Form from "../models/formModel"; // Adjust path as needed

// POST or PATCH: Create or Update Form
// Expecting request.body to have:
// {
//   formId?: string,
//   title: string,
//   headerImage?: string,
//   categorize: { ... },
//   cloze: { ... },
//   comprehension: { ... }
// }
export const createOrUpdateForm: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      userId,
      formId,
      title,
      headerImage,
      categorize,
      cloze,
      comprehension,
    } = req.body;

    if (!userId) {
      res.status(400).json({ message: "userId is required." });
      return;
    }

    if (!title) {
      res.status(400).json({ message: "Title is required." });
      return;
    }

    let form;
    if (formId) {
      // Update existing form
      form = await Form.findById(formId);
      if (!form) {
        res.status(404).json({ message: "Form not found." });
        return;
      }

      // Update fields if provided
      if (title !== undefined) form.title = title;
      if (headerImage !== undefined) form.headerImage = headerImage;
      if (categorize !== undefined) form.categorize = categorize;
      if (cloze !== undefined) form.cloze = cloze;
      if (comprehension !== undefined) form.comprehension = comprehension;

      await form.save();
    } else {
      // Create new form
      form = new Form({
        title,
        userId,
        headerImage: headerImage || "",
        categorize: categorize || {},
        cloze: cloze || {},
        comprehension: comprehension || {},
      });
      await form.save();
    }

    res.status(200).json({
      message: "Form saved successfully.",
      form,
    });
  } catch (error: any) {
    console.error("Error in createOrUpdateForm:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET: Get a form by ID
export const getForm: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    console.log("userId :", userId);
    const form = await Form.find({ userId: userId as string });
    if (!form) {
      res.status(404).json({ message: "Form not found." });
      return;
    }

    res.status(200).json({ form });
  } catch (error: any) {
    console.error("Error in getForm:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
