import links from '../assets/links.json'

function Footer() {
    const time = new Date().getFullYear();

    return (
        <footer>
            <ul>
                {links.map(link => (
                    <li key={link.label}>
                        <a href={link.link} target='_blank'>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <p>© {time} Atlas School</p>
        </footer>
    )
}

export default Footer;