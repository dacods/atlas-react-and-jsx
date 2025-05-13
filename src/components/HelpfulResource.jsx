import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

function HelpfulResource(props) {
    return (
        <div className="helpful-resource">
            {props.label}
            <OpenLink link={props.link}></OpenLink>
            <CopyLink link={props.link}></CopyLink>
        </div>
    )
}

export default HelpfulResource;