const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Im service")
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Transporter konfigurieren
  const transporter = nodemailer.createTransport({
    service: "gmail", // Gmail als Service
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_USER, // Deine Gmail-Adresse
      pass: process.env.NEXT_PUBLIC_GMAIL_PASS, // Dein Gmail-App-Passwort
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.NEXT_PUBLIC_GMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_GMAIL_USER,
      subject,
      text: message,
      replyTo: email,
    });
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email", error });
  }
}
