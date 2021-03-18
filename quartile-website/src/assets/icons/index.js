// import QuartileLogo from "./QuartileLogo"
import whiteLogo from'./logo_full.png';
import blueLogo from'./logo_full_primary.png';
import makeInIndia from'./Make_in_India.png';
import digitalIndia from'./digital_India.png';
import aatmaNirbharBharat from'./aatmanirbhar_bharat.jpeg';
import NextIcon from "./next"
import BackIcon from "./back"

const QuartileLogoWhite = (props) => (
    <img src={whiteLogo} alt={"Quartile Logo White"} draggable="false" {...props}></img>
)

const QuartileLogoPrimary = (props) => (
    <img src={blueLogo} alt={"Quartile Logo Primary"} draggable="false" {...props}></img>
)

const MakeInIndiaLogo = (props) => (
    <img src={makeInIndia} alt={"Make In India Logo"} draggable="false" {...props}></img>
)

const DigitalIndiaLogo = (props) => (
    <img src={digitalIndia} alt={"Digital India Logo"} draggable="false" {...props}></img>
)

const AatmaNirbharBharatLogo = (props) => (
    <img src={aatmaNirbharBharat} alt={"Aatma Nirbhar Bharat Logo"} draggable="false" {...props}></img>
)

export {
    QuartileLogoWhite,
    QuartileLogoPrimary,
    NextIcon,
    BackIcon,
    MakeInIndiaLogo,
    DigitalIndiaLogo,
    AatmaNirbharBharatLogo
};