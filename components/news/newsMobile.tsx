import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'

const NewsMobile = (): JSX.Element => {
    return (
        <>
            <HeaderMobile location={LinkLocation.News}/>
            <main></main>
            <footer></footer>
        </>
    )
}

export default NewsMobile
