import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import validator from 'validator'
import axios from 'axios'

const ContactMobile = (): JSX.Element => {
    const [email, setEmail] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [text, setText] = useState<string>("")
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(event.target.value);
    }
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const sendEmail = () => {
        axios.post("/api/contact", {
            email: email,
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
                        id="email"
                        label="Deine Email Adresse"
                        margin="normal"
                        color="secondary"
                        onChange={handleEmailChange}
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
                        onChange={handleSubjectChange}
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
                        onChange={handleTextChange}
                        error={validator.isEmpty(text.trim())}
                    />
                    <Button
                        color="secondary"
                        variant="outlined"
                        onClick={sendEmail}
                    >Nachricht abschicken</Button>
                </Container>
            </main>
            <footer></footer>
        </>
    )
}

export default ContactMobile
