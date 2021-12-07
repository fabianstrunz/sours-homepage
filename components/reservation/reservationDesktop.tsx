import HeaderDesktop from '../header/headerDesktop'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import validator from 'validator'
import FooterDesktop from '../footer/footerDesktop'
import { DesktopDateTimePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { de } from 'date-fns/locale'
import axios from 'axios'

const ReservationDesktop = (): JSX.Element => {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [count, setCount] = useState<string>("")
    const [date, setDate] = useState<Date | null>()

    const sendReservation = () => {
        axios.post("/api/reservation", {
            email: email,
            name: name,
            count: count,
            date: date
        }).then(response => {
            console.log(response)
        })
    }

    return (
        <>
            <HeaderDesktop/>
            <main>
                <Container sx={{marginTop: "64px"}}>
                    <Typography component="h3" variant="h3" color="secondary">Tisch reservieren</Typography>
                    <Box>
                        <TextField
                            sx={{input: {color: "yellow"}, width: "38%"}}
                            variant="outlined"
                            required
                            id="name"
                            label="Dein Name"
                            margin="normal"
                            color="secondary"
                            onChange={event => setName(event.target.value)}
                            error={validator.isEmpty(name.trim())}
                        />
                    </Box>
                    <Box>
                        <TextField
                            sx={{input: {color: "yellow"}, width: "38%"}}
                            variant="outlined"
                            required
                            id="email"
                            label="Deine Email Adresse"
                            margin="normal"
                            color="secondary"
                            onChange={event => setEmail(event.target.value)}
                            error={!validator.isEmail(email)}
                        />
                    </Box>
                    <Box>
                        <TextField
                            sx={{input: {color: "yellow"}, width: "38%"}}
                            variant="outlined"
                            required
                            id="count"
                            label="Anzahl der Personen"
                            margin="normal"
                            color="secondary"
                            onChange={event => setCount(event.target.value)}
                            error={!validator.isDecimal(count.trim())}
                        />
                    </Box>
                    <Box sx={{svg: {fill: "yellow"}}}>
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            locale={de}
                        >
                            <DesktopDateTimePicker
                                ampm={false}
                                onChange={newDate => setDate(newDate)}
                                value={date}
                                renderInput={params => <TextField {...params}
                                                                  sx={{input: {color: "yellow"}}}/>}
                            />
                        </LocalizationProvider>
                    </Box>
                    <Button
                        color="secondary"
                        variant="outlined"
                        size="large"
                        onClick={sendReservation}
                    >
                        Reservierung anfragen
                    </Button>
                </Container>
            </main>
            <FooterDesktop/>
        </>
    )
}

export default ReservationDesktop
