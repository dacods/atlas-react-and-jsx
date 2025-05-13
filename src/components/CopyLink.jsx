import copy from '../assets/copy.svg'

function CopyLink(props) {
    const handleCopy = () => {
        navigator.clipboard.writeText(props.link)
    }

    return (
        <img src={copy} alt="" onClick={handleCopy} className='copy'/>
    )
}

export default CopyLink;