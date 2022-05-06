import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4dcbfa47e7580e",
    pass: "18278e48044e9a",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Team Feedget <oi@feedget.com>",
      to: "Nilson Sierota <nilsoncv2@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
