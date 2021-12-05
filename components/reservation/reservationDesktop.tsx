import HeaderDesktop from '../header/headerDesktop'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import validator from 'validator'
import FooterDesktop from '../footer/footerDesktop'

const ReservationDesktop = (): JSX.Element => {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [count, setCount] = useState<string>("")

    return (
        <>
            <HeaderDesktop />
            <main>
                <Container sx={{ marginTop: "64px" }}>
                    <Typography component="h3" variant="h3" color="secondary">Tisch reservieren</Typography>
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
                            id="count"
                            label="Anzahl der Personen"
                            margin="normal"
                            color="secondary"
                            sx={{ width: "38%"}}
                            onChange={event => setCount(event.target.value)}
                            error={!validator.isDecimal(count.trim())}
                        />
                    </Box>
                    <Button
                        color="secondary"
                        variant="outlined"
                        size="large"
                    >
                        Reservierung anfragen
                    </Button>
                </Container>
            </main>
            <FooterDesktop />
        </>
    )
}

export default ReservationDesktop
