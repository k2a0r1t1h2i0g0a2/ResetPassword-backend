import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "karthiga.r2002@gmail.com",
    pass: "xibn zvlg fjlv ubtq",
  },
});

const sendResetPasswordEmail = async (to, resetLink) => {
   
  const mailOptions = {
    from: "karthiga.r2002@gmail.com",
    to,
    subject: "Password Reset",
    html: `Click the following link to reset your password: <a href="${resetLink}">${resetLink}</a>`,
  };

 try {
   await transporter.sendMail(mailOptions);
   console.log("Reset password email sent successfully.");
 } catch (error) {
   console.error("Error sending reset password email:", error);
 }
};
export default sendResetPasswordEmail;
 

