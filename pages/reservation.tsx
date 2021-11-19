import type { NextPage } from 'next'
import { useMediaQuery, useTheme } from '@mui/material'
import Head from 'next/head'
import ReservationMobile from '../components/reservation/reservationMobile'
import ReservationDesktop from '../components/reservation/reservationDesktop'

const Reservation: NextPage = () => {
    const theme = useTheme()

    const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"))
    const isDesktop: boolean = useMediaQuery(theme.breakpoints.up("md"))

    return (
        <>
            <Head>
                <title>Sours Homepage - Tisch reservieren</title>
            </Head>
            {
                isMobile && !isDesktop ?
                    <ReservationMobile /> :
                    <ReservationDesktop />
            }
        </>
    )
}

export default Reservation
