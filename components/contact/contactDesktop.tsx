import HeaderDesktop from '../header/headerDesktop'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import validator from 'validator'
import axios from 'axios'
import FooterDesktop from '../footer/footerDesktop'

const ContactDesktop = (): JSX.Element => {
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
            <HeaderDesktop />
            <main>
                <Container sx={{ marginTop: "64px" }}>
                    <Typography component="h3" variant="h3" color="secondary">Kontakt</Typography>
                    <Box>
                        <TextField
                            variant="outlined"
                            required
                            id="name"
                            label="Dein Name"
                            margin="normal"
                            color="secondary"
                            sx={{ width: "38%"}}
                            onChange={event => setName(event.target.value)}
                            error={validator.isEmpty(name.trim())}
                        />
                    </Box>
                    <Box>
                        <TextField
                            variant="outlined"
                            required
                            id="email"
                            label="Deine Email Adresse"
                            margin="normal"
                            color="secondary"
                            sx={{ width: "38%"}}
                            onChange={event => setEmail(event.target.value)}
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
                            onChange={event => setSubject(event.target.value)}
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
                            onChange={event => setText(event.target.value)}
                            error={validator.isEmpty(text.trim())}
                        />
                    </Box>
                    <Box>
                        <Button
                            color="secondary"
                            variant="outlined"
                            size="large"
                            onClick={sendEmail}
                        >
                            Nachricht abschicken
                        </Button>
                    </Box>
                </Container>
            </main>
            <FooterDesktop />
        </>
    )
}

export default ContactDesktop
