import nodemailer from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/sendmail-transport'

interface RBody {
    email: string,
    subject: string,
    text: string
}

export default function (req: any, resp: any) {
    const rbody: RBody = req.body
    const mailserver: string|undefined = process.env.MAIL_SERVER
    const mailuser: string|undefined = process.env.MAIL_USER
    const mailpassword: string|undefined = process.env.MAIL_PASSWORD
    const transport = nodemailer.createTransport({
        host: "smtp.web.de",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "fabian_strunz",
            pass: "easypass"
        }
    })
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
