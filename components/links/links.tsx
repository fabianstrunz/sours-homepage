import Link from 'next/link'
import { Typography } from '@mui/material'

export const HomeLink = (): JSX.Element => {
    return (
        <Link href="/" passHref>
            <Typography
                variant="h6"
                component="a"
                color="secondary"
                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
                Startseite
            </Typography>
        </Link>
    )
}

export const NewsLink = (): JSX.Element => {
    return (
        <Link href="/news" passHref>
            <Typography
                variant="h6"
                component="a"
                color="secondary"
                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
                Neuigkeiten
            </Typography>
        </Link>
    )
}

export const ReservationLink = (): JSX.Element => {
    return (
        <Link href="/reservation" passHref>
            <Typography
                variant="h6"
                component="a"
                color="secondary"
                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
                Tisch reservieren
            </Typography>
        </Link>
    )
}

export const MenuLink = (): JSX.Element => {
    return (
        <Link href="/menu" passHref>
            <Typography
                variant="h6"
                component="a"
                color="secondary"
                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
                Speisekarte
            </Typography>
        </Link>
    )
}

export const ContactLink = (): JSX.Element => {
    return (
        <Link href="/contact" passHref>
            <Typography
                variant="h6"
                component="a"
                color="secondary"
                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
                Kontakt
            </Typography>
        </Link>
    )
}
