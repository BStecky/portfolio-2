import { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.stringify(req.body);
  const msg = JSON.parse(body);
  console.log(msg);
  await sendgrid
    .send({
      to: "stecklineblane@gmail.com",
      from: "stecklineblane@gmail.com",
      subject: "Someone has filled out your contact form!",
      html: `
      <section>
      <h1>From: ${msg.name} </h1>
      <h2>User Email: ${msg.from}</h2>
      <h2>Subject: ${msg.subject} </h2>
      <h2>Message: ${msg.text} </h2>
      </section>
      `,
    })
    .then(() => {
      console.log("email sent");
    })
    .catch((error) => {
      console.log("errors", error.toString());
    });

  res.status(200).json({ status: "Ok" });
};
