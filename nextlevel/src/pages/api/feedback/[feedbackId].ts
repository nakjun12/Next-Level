import { NextApiRequest, NextApiResponse } from "next";
import { buildFeedbackPath, extractFeedback } from "../feedback";

interface feedback {
  id: string;
  email: string;
  text: string;
}

export default function feedbackId(req: NextApiRequest, res: NextApiResponse) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectData = feedbackData.find((data: feedback) => {
    return data.id === feedbackId;
  });
}
