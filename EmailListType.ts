import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

export const WelcomeEmail = (name:string,email:string) => {
  const sentFrom = new Sender("you@yourdomain.com", "Your name");

  const recipients = [
    new Recipient(email, name)
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("Application Reminder")
    .setTemplateId(process.env.TEMP_ID);

  mailerSend.email.send(emailParams).then(res => {

  }).catch(err => {

  })
}