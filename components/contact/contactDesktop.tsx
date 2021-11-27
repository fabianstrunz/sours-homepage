import HeaderDesktop from '../header/headerDesktop'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import validator from 'validator'
import axios from 'axios'

const ContactDesktop = (): JSX.Element => {
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
            <HeaderDesktop />
            <main>
                <Container sx={{ marginTop: "64px" }}>
                    <Typography component="h3" variant="h3" color="secondary">Kontakt</Typography>
                    <Box>
                        <TextField
                            variant="outlined"
                            required
                            id="email"
                            label="Deine Email Adresse"
                            margin="normal"
                            color="secondary"
                            sx={{ width: "38%"}}
                            onChange={handleEmailChange}
                            error={!validator.isEmail(email)}
                        />
                    </Box>
                    <Box>
                        <TextField
                            variant="outlined"
                            required
                            id="subject"
                            label="Betreff"
                            margin="normal"
                            color="secondary"
                            sx={{ width: "38%"}}
                            onChange={handleSubjectChange}
                            error={validator.isEmpty(subject.trim())}
                        />
                    </Box>
                    <Box>
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
                    </Box>
                    <Box>
                        <Button
                            color="secondary"
                            variant="outlined"
                            onClick={sendEmail}
                        >Nachricht abschicken</Button>
                    </Box>
                </Container>
            </main>
            <footer></footer>
        </>
    )
}

export default ContactDesktop
