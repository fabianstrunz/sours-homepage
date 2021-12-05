import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'
import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import validator from 'validator'
import FooterMobile from '../footer/footerMobile'

const ReservationMobile = (): JSX.Element => {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [count, setCount] = useState<string>("")

    return (
        <>
            <HeaderMobile location={LinkLocation.Reservation}/>
            <main>
                <Container>
                    <Typography component="h3" variant="h3" color="secondary">Tisch reservieren</Typography>
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
                        id="count"
                        label="Anzahl der Personen"
                        margin="normal"
                        color="secondary"
                        onChange={event => setCount(event.target.value)}
                        error={!validator.isDecimal(count.trim())}
                        fullWidth
                    />
                    <Button
                        color="secondary"
                        variant="outlined"
                        size="large"
                    >
                        Reservierung anfragen
                    </Button>
                </Container>
            </main>
            <FooterMobile />
        </>
    )
}

export default ReservationMobile
