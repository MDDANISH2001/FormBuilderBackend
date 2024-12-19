import { Request, RequestHandler, Response } from "express";
import ResponseModel from "../models/responseModel"; // Import the response schema

// Save form response
export const saveFormResponse: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { userId, questionId, categorize, cloze, comprehension } = req.body;

  if (!userId || !questionId) {
    res.status(400).json({ error: "userId and questionId are required." });
    return;
  }

  try {
    // Check if a response already exists for this user and title
    const existingResponse = await ResponseModel.findOne({ userId: userId });

    if (existingResponse) {
      res
        .status(400)
        .json({ message: "Response already exists. No action taken." });
      return;
    }

    // Create a new response
    const newResponse = new ResponseModel({
      userId,
      questionId,
      categorize: categorize || {},
      cloze: cloze || {},
      comprehension: comprehension || {},
    });

    const savedResponse = await newResponse.save();

    res.status(201).json({
      message: "Response saved successfully.",
      data: savedResponse,
    });
  } catch (error) {
    console.error("Error saving response:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the response." });
  }
};
