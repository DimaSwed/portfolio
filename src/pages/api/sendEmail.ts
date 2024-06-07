import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface EmailRequestBody {
  name: string
  contact: string
  subject: string
  message: string
  captchaValue: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, contact, subject, message, captchaValue }: EmailRequestBody = req.body

    const SECRET_KEY: string = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET || ''
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${captchaValue}`

    try {
      const captchaResponse = await fetch(verifyUrl, { method: 'POST' })
      const captchaVerification = await captchaResponse.json()

      if (!captchaVerification.success) {
        return res.status(400).json({ error: 'Invalid reCAPTCHA' })
      }

      const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      })

      // Отправка электронного письма
      const info = await transporter.sendMail({
        from: `"${contact}" <${process.env.MAIL_USER}>`,
        to: 'swed88@mail.ru',
        subject: subject,
        text: `Hello, you have a new form submission:\n\nName: ${name}\nContact: ${contact}\nMessage: ${message}`,
        html: `<p>Hello, you have a new form submission:</p>
               <p>Name: ${name}</p>
               <p>Contact: ${contact}</p>
               <p>Message: ${message}</p>`
      })

      console.log('Message sent: %s', info.messageId)
      res.status(200).json({ success: true })
    } catch (error) {
      console.error('Error occurred:', error)
      res.status(500).json({ error: 'An error occurred while sending the email' })
    }
  } else {
    res.status(405).end()
  }
}

export default handler
