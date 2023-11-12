import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY as string,
});

export const WelcomeEmail = (email:string,name:string) => {
  const sentFrom = new Sender("you@yourdomain.com", "Your name");

  const recipients = [
    new Recipient(email, name)
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("Application Reminder")
    .setTemplateId(process.env.TEMP_ID as string);

mailerSend.email.send(emailParams).then(res=>{
  if(res.statusCode==200){
    console.log("Email sent")
  }else{
    console.log(res.body.errors)
  }
}).catch(err=>{
  console.log(err)})
}