import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'

const IndexMobile = (): JSX.Element => {
    return (
        <>
            <HeaderMobile location={LinkLocation.Home}/>
            <main></main>
            <footer></footer>
        </>
    )
}

export default IndexMobile
