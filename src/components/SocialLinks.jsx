import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

function SocialLinks() {
    return (
        <div className="social-links">
            <a href='https://www.linkedin.com/in/dacoda-takagi' target='_blank'>
                <img src={linkedin} alt="Linkedin Logo"/>
            </a>

            <a href='https://github.com/dacods/atlas-react-and-jsx' target='_blank'>
                <img src={github} alt='Github Logo'></img>
            </a>
        </div>
    )
}

export default SocialLinks;