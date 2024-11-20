const express = require('express');
require("dotenv").config();
const nodemailer = require("nodemailer");
const app = express();
const port =process.env.PORT ||8080;
app.use(express.json());
app.post('/Email', async (req, res) => {
    try {
      console.log(process.env.EMAIL, process.env.PASS);
      const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass:process.env.PASS,
        },
      });
  
      const info = await transporter.sendMail({
        from: '"Admin-Ahmed Shaikh" <shaikhahmedjilani7860@gmail.com>',
        to: "ahmedjilani0011@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
      });
  
      console.log(info);
      res.send("Email successfully sent");
    } catch (error) {
      console.error(error);
      res.status(500).send("Failed to send email");
    }
  });
app.listen(port,()=>{
    console.log('listening on port',port);
})