import { Button, Container, InputAdornment, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import validator from 'validator'
import EmailIcon from '@mui/icons-material/Email'
import axios from 'axios'

const FooterMobile = () => {
    const [newsletter, setNewsletter] = useState<string>("")

    const sendNewsletterSubscription = () => {
        axios.post("/api/newsletter", {
            subscribe: true,
            email: newsletter
        }).then(response => {
            console.log(response)
        })
    }

    return (
        <footer style={{ backgroundColor: "black" }}>
            <Container sx={{ marginTop: "2em", padding: "1em" }}>
                <Typography component="h4" variant="h4" color="secondary" sx={{ textAlign: "center" }}>Öffnungszeiten</Typography>
                <Typography component="p" color="secondary" sx={{ textAlign: "center" }}>Di - Do 7:30 - 23:00 Uhr</Typography>
                <Typography component="p" color="secondary" sx={{ textAlign: "center" }}>Fr 7:30 - 2:00 Uhr</Typography>
                <Typography component="p" color="secondary" sx={{ textAlign: "center" }}>Sa - So 9:00 - 2:00 Uhr</Typography>

                <Typography component="h4" variant="h4" color="secondary" sx={{ textAlign: "center", marginTop: "1em" }}>Social Media</Typography>
                <div style={{ textAlign: "center" }}>
                    <FacebookIcon fontSize="large" color="secondary"/>
                    <Link
                        href="https://facebook.com/sours.stadtbar/"
                        underline="hover"
                        rel="noopener"
                        color="secondary"
                    >
                        Facebook
                    </Link>
                </div>
                <div style={{ textAlign: "center" }}>
                    <InstagramIcon fontSize="large" color="secondary"/>
                    <Link
                        href="https://www.instagram.com/sours_stadtbar/?hl=de"
                        underline="hover"
                        rel="noopener"
                        color="secondary"
                    >
                        Instagramm
                    </Link>
                </div>

                <Typography component="h4" variant="h4" color="secondary" sx={{ textAlign: "center", marginTop: "1em" }}>Newsletter</Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    id="newsletter-mail"
                    margin="normal"
                    error={!validator.isEmail(newsletter)}
                    onChange={event => setNewsletter(event.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon
                                    color="secondary"
                                    fontSize="large"
                                />
                            </InputAdornment>
                        )
                    }}
                />
                <div>
                    <Button
                        color="secondary"
                        variant="outlined"
                        size="large"
                        onClick={sendNewsletterSubscription}
                    >
                        Anmelden
                    </Button>
                </div>
            </Container>
        </footer>
    )
}

export default FooterMobile
