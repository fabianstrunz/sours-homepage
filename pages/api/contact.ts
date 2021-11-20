import { IncomingMessage, ServerResponse } from 'http'
import nodemailer from 'nodemailer'

export default function (req: IncomingMessage, resp: ServerResponse) {
    console.log(req)
    /*
    const transport = nodemailer.createTransport({
        host: "smtp.web.de",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "fabian_strunz",
            pass: "2018Email01$$"
        }
    })
    transport.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    })

     */
}
