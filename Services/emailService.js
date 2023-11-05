import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "karthiga.r2002@gmail.com",
    pass: "xibn zvlg fjlv ubtq",
  },
});

const sendResetPasswordEmail = async (to, resetLink) => {
  const FRONTEND_URL = process.env.FRONTEND_URL; 
  const completeResetLink = `${FRONTEND_URL}/reset-password/${resetLink}`; 
  const mailOptions = {
    from: "karthiga.r2002@gmail.com",
    to,
    subject: "Password Reset",
    html: `Click the following link to reset your password: <a href="${completeResetLink}">${completeResetLink}</a>`,
  };

  await transporter.sendMail(mailOptions);
};
export default sendResetPasswordEmail;
 

