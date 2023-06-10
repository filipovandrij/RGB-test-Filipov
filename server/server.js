const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/send-email", (req, res) => {
  const { title, author, year, rating } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "andrijfilipov73@gmail.com",
      pass: "goaqskffrpvnfbft",
    },
  });

  const mailOptions = {
    from: "andrijfilipov73@gmail.com",
    to: "4kafilipova@gmail.com",
    subject: "New Product Added",
    html: `
      <h3>New Product Added:</h3>
      <p>Title: ${title}</p>
      <p>Author: ${author}</p>
      <p>Year: ${year}</p>
      <p>Rating: ${rating}</p>
    `,
  };

  console.log("Sending email...");
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        error: "An error occurred while sending the email",
      });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
