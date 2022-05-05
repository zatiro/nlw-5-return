import { prisma } from "../../prisma";
import { FeedbackCreateData, feedbackRepository } from "../feedback-repositories";

export class PrismaFeedbacksRepository implements feedbackRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })
  }
}