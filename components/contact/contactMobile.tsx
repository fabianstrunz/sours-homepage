import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'

const ContactMobile = (): JSX.Element => {
    return (
        <>
            <header>
                <HeaderMobile location={LinkLocation.Contact}/>
            </header>
            <main></main>
            <footer></footer>
        </>
    )
}

export default ContactMobile
