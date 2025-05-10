import Greeting from "./Greeting"
import SocialLinks from "./SocialLinks"

function Header() {
    return (
        <nav>
            <Greeting></Greeting>
            <SocialLinks></SocialLinks>
        </nav>
    )
}

export default Header;