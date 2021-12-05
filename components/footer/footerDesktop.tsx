import { Button, Container, Grid, InputAdornment, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import validator from 'validator'
import axios from 'axios'
import CopyrightIcon from '@mui/icons-material/Copyright';

const FooterDesktop = (): JSX.Element => {
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
                <Grid container>
                    <Grid item xs={4}>
                        <Typography component="h4" variant="h4" color="secondary">Öffnungszeiten</Typography>
                        <Typography component="p" color="secondary">Di - Do 7:30 - 23:00 Uhr</Typography>
                        <Typography component="p" color="secondary">Fr 7:30 - 2:00 Uhr</Typography>
                        <Typography component="p" color="secondary">Sa - So 9:00 - 2:00 Uhr</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography component="h4" variant="h4" color="secondary">Social Media</Typography>
                        <div>
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
                        <div>
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
                    </Grid>
                    <Grid item xs={4}>
                        <Typography component="h4" variant="h4" color="secondary">Newsletter</Typography>
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
                    </Grid>
                </Grid>
                <Typography component="h5" variant="h5" color="secondary" sx={{ textAlign: "center"}}>
                    <CopyrightIcon />
                    {new Date().getFullYear()} by F.S.
                </Typography>
            </Container>
        </footer>
    )
}

export default FooterDesktop
