import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { FindAllFeedbackUseCase } from "./use-cases/findAll-feedback-use-case";

export const routes = express.Router();

routes.post("/feedback", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  try {
    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });

    return res.status(201).send();
  } catch (error) {
    return res.status(400).json({
      error: "Não foi possível cadastrar um Feedback!",
    });
  }
});

routes.get("/feedbacks", async (req, res) => {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

  const findAllFeedbackUseCase = new FindAllFeedbackUseCase(
    prismaFeedbacksRepository
  );

  try {
    const feedbacks = await findAllFeedbackUseCase.execute();
    return res.json(feedbacks);
  } catch (error) {
    return res.status(400).json({
      error: "Não foi possível obter os Feedbacks!",
    });
  }
});
