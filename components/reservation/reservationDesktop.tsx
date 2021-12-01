import HeaderDesktop from '../header/headerDesktop'
import { Container, Typography } from '@mui/material'

const ReservationDesktop = (): JSX.Element => {
    return (
        <>
            <HeaderDesktop />
            <main>
                <Container sx={{ marginTop: "64px" }}>
                    <Typography component="h3" variant="h3" color="secondary">Tisch reservieren</Typography>
                </Container>
            </main>
            <footer></footer>
        </>
    )
}

export default ReservationDesktop
