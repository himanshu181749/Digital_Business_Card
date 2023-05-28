import mypic from "../images/himanshu.jpeg"

export default function Photo() {
    return (
        <div id="ctn-image">
            <img src={mypic} ></img>
            <p id="attribution"><em>Photo credit: ASR (2023) - "FLUXUS : DAY 1"</em></p>
        </div>
    );
}