import open from '../assets/open.svg';

function OpenLink(props) {
    return (
        <a href={props.link} target='_blank'>
            <img src={open} alt="Open external link" />
        </a>
    )
}

export default OpenLink;