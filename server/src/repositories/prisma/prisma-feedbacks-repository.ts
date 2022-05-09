import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbackRepository,
  FeedbackData,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }

  async findAll() {
    const feedbacks = await prisma.feedback.findMany();

    return feedbacks as FeedbackData[] | null;
  }
}
