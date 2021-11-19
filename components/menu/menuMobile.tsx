import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'

const MenuMobile = (): JSX.Element => {
    return (
        <>
            <HeaderMobile location={LinkLocation.Menu}/>
            <main></main>
            <footer></footer>
        </>
    )
}

export default MenuMobile
