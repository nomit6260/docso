// import QuartileLogo from "./QuartileLogo"
import whiteLogo from'./logo_full.png';
import blueLogo from'./logo_full_primary.png';
import NextIcon from "./next"
import BackIcon from "./back"

const QuartileLogoWhite = (props) => (
    <img src={whiteLogo} alt={"Quartile Logo White"} {...props}></img>
)

const QuartileLogoPrimary = (props) => (
    <img src={blueLogo} alt={"Quartile Logo Primary"} {...props}></img>
)
export {
    QuartileLogoWhite,
    QuartileLogoPrimary,
    NextIcon,
    BackIcon
};