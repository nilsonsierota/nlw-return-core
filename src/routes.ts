import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4dcbfa47e7580e",
    pass: "18278e48044e9a",
  },
});

routes.post("/feedback", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: "Team Feedget <oi@feedget.com>",
    to: "Nilson Sierota <nilsoncv2@gmail.com>",
    subject: "New Feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: "#111";">`,
      `<p>Tipo do Feedback: ${type}</p>`,
      `<p>Comentario: ${comment}</p>`,
      "</div>",
    ].join("\n"),
  });

  return res.status(201).json({ data: feedback });
});
