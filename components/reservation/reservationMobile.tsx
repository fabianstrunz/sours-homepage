import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'
import { Container, Typography } from '@mui/material'

const ReservationMobile = (): JSX.Element => {
    return (
        <>
            <HeaderMobile location={LinkLocation.Reservation}/>
            <main>
                <Container>
                    <Typography component="h3" variant="h3" color="secondary">Tisch reservieren</Typography>
                </Container>
            </main>
            <footer></footer>
        </>
    )
}

export default ReservationMobile
