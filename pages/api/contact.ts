import nodemailer from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/sendmail-transport'
import { NextApiRequest, NextApiResponse } from 'next'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

interface RBody {
    email: string,
    subject: string,
    text: string,
    name: string
}

export default function (req: NextApiRequest, resp: NextApiResponse) {
    const rbody: RBody = req.body
    const mailserver: string|undefined = process.env.MAIL_SERVER

    const transport = nodemailer.createTransport({
        host: process.env.MAIL_SERVER,
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    } as SMTPTransport.Options)
    const mail: MailOptions = {
        from: "fabian_strunz@web.de",
        to: rbody.email,
        subject: rbody.subject,
        text: rbody.text
    }

    transport.sendMail(mail, ((err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    }))

    resp.status(200).end()
}
