import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'
import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import validator from 'validator'
import axios from 'axios'
import FooterMobile from '../footer/footerMobile'

const ContactMobile = (): JSX.Element => {
    const [email, setEmail] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [text, setText] = useState<string>("")
    const [name, setName] = useState<string>("")

    const sendEmail = () => {
        axios.post("/api/contact", {
            email: email,
            name: name,
            subject: subject,
            text: text
        }).then(value => {
            console.log(value)
        }).catch(reason => {
            console.log(reason)
        })
    }

    return (
        <>
            <header>
                <HeaderMobile location={LinkLocation.Contact}/>
            </header>
            <main>
                <Container>
                    <Typography component="h3" variant="h3" color="secondary">Kontakt</Typography>
                    <TextField
                        variant="outlined"
                        required
                        id="name"
                        label="Dein Name"
                        margin="normal"
                        color="secondary"
                        onChange={event => setName(event.target.value)}
                        error={validator.isEmpty(name.trim())}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        required
                        id="email"
                        label="Deine Email Adresse"
                        margin="normal"
                        color="secondary"
                        onChange={event => setEmail(event.target.value)}
                        error={!validator.isEmail(email)}
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        required
                        id="subject"
                        label="Betreff"
                        margin="normal"
                        color="secondary"
                        onChange={event => setSubject(event.target.value)}
                        error={validator.isEmpty(subject.trim())}
                        fullWidth
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        required
                        id="text"
                        label="Deine Nachricht an uns"
                        multiline
                        margin="normal"
                        color="secondary"
                        rows={10}
                        onChange={event => setText(event.target.value)}
                        error={validator.isEmpty(text.trim())}
                    />
                    <Button
                        color="secondary"
                        variant="outlined"
                        size="large"
                        onClick={sendEmail}
                    >
                        Nachricht abschicken
                    </Button>
                </Container>
            </main>
            <FooterMobile />
        </>
    )
}

export default ContactMobile
