// import QuartileLogo from "./QuartileLogo"
import whiteLogo from'./logo_full_svg.svg';
import calenderLogo from'./297443.png';
import phoneLogo from'./724664.png';
import clockLogo from'./862358.png';
import bellLogo from'./1182718.png';
import NextIcon from "./next"
import BackIcon from "./back"

const QuartileLogoWhite = (props) => (
    <img src={whiteLogo} alt={"Docso Logo Blue"} draggable="false" {...props} style={{color: "white"}}></img>
)

const CalenderLogo = (props) => (
    <img src={calenderLogo} alt={"Calender Logo"} draggable="false" {...props} style={{color: "white"}}></img>
)

const PhoneLogo = (props) => (
    <img src={phoneLogo} alt={"Phone Logo"} draggable="false" {...props} style={{color: "white"}}></img>
)

const ClockLogo = (props) => (
    <img src={clockLogo} alt={"Clock Logo"} draggable="false" {...props} style={{color: "white"}}></img>
)

const BellLogo = (props) => (
    <img src={bellLogo} alt={"bell Logo"} draggable="false" {...props} style={{color: "white"}}></img>
)



export {
    QuartileLogoWhite,
    CalenderLogo,
    PhoneLogo,
    ClockLogo,
    BellLogo,
    NextIcon,
    BackIcon,
    
};