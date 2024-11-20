const express = require('express');
const cors = require('cors');
require("dotenv").config();
const nodemailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: 'https://email-feed-back-git-main-ahmed-jilanis-projects.vercel.app', 
  methods: 'GET,POST'
};

app.use(cors(corsOptions));
app.get('/', function(req, res){
  res.send("welcome");
});
app.post('/Email',async (req, res) => {
    try {
        // const { senderEmail, senderFeedback,senderName } = req.body;
res.send(req.body)
    //     if (!senderEmail || !senderFeedback || !senderName) {
    //         return res.status(400).send("Sender email and feedback are required");
    //     }

    //     console.log(process.env.EMAIL, process.env.PASS);

    //     const transporter = nodemailer.createTransport({
    //         service: "gmail",
    //         port: 465,
    //         secure: true,
    //         auth: {
    //             user: process.env.EMAIL,
    //             pass: process.env.PASS,
    //         },
    //     });
    
    //     let portfolioLink ="https://your-portfolio-link.com";
    //     const info = await transporter.sendMail({
    //       from: `"Ahmed Shaikh" <${process.env.EMAIL}>`,
    //       to: senderEmail,
    //       subject: "Together, We Build Something Better – Grateful for Your Valuable Feedback!",
    //       text: `Dear ${senderName},\n\nThank you for taking the time to explore my portfolio and share your valuable insights. Your feedback is not just appreciated – it’s invaluable, as it inspires me to strive for even greater heights.\n\nI’m truly grateful for your support and look forward to staying connected.\n\n If you’d like to revisit my portfolio or see updates, feel free to check it out here: ${portfolioLink}\n\nBest regards,\nAhmed Shaikh`,
    //       html: `
    //           <p>Dear ${senderName},</p>
    //           <p>Thank you for taking the time to explore my portfolio and share your valuable insights. Your feedback is not just appreciated – it’s invaluable, as it inspires me to strive for even greater heights.</p>
    //           <p>I’m truly grateful for your support and look forward to staying connected.<br><br> If you’d like to revisit my portfolio or see updates, feel free to check it out here: <a href="${portfolioLink}" target="_blank">${portfolioLink}</a></p>
    //           <p>Best regards,<br>Ahmed Shaikh</p>
    //       `,
    //   });
    //   var date =new Date()
    // // setTimeout(async()=>{
    // //   const infos = await transporter.sendMail({
    // //     from: `"Ahmed Shaikh" <${process.env.EMAIL}>`,
    // //     to: 'shaikhaj7860@gmail.com',
    // //     subject: `Feedback by ${senderName}`,
    // //     text: `Dear Ahmed Sir,\n Date:${date}\n Name: ${senderName}\n Email:${senderEmail}\n Message:${senderFeedback}\n\nBest regards,\nAhmed Shaikh`
    // //     ,   html: `
    // //         <p>Dear Ahmed Sir,</p>
    // //         <p>Date:${date}</p>
    // //         <p>Name:${senderName}</p>
    // //         <p>Email:${senderEmail}</p>
    // //         <p>Message:${senderFeedback}</p>
    // //         <p>Best regards,<br>Ahmed Shaikh</p>
    // //     `,
    // // });
    // // },1000)
      
    //     console.log(info);
    //     res.send("Thank-you email successfully sent");
    } catch (error) {
        console.error(error);
      
        res.status(500).send("Failed to send thank-you email",error);
    }
});

app.listen(port, () => {
    console.log('Listening on port', port);
});