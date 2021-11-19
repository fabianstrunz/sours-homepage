import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'

const ReservationMobile = (): JSX.Element => {
    return (
        <>
            <HeaderMobile location={LinkLocation.Reservation}/>
            <main></main>
            <footer></footer>
        </>
    )
}

export default ReservationMobile
