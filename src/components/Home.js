import React from "react"
import "./styles/home.scss"
import teaLs from "./images/teals.jpeg"
import bambouPic from "./images/bambouPic.jpeg"
import teaJar  from "./images/teaJar.jpeg"
import motchaPic from "./images/matchaPic.jpeg"
import divers from "./images/divers.jpeg"
import yellowPic from "./images/yellowPic.jpeg"
import tea from "./images/tea.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugSaucer} from '@fortawesome/free-solid-svg-icons'

const iconTea = <FontAwesomeIcon className="teaIcon" icon={faMugSaucer} />
const Home = () => {


    return (
        <div className="container-home">
               <div className="divImg"></div>
            <div className="divTitle"><h1 className="title-home">Discover our range of high quality products from all over the world.</h1></div>
            <div className="intro-text">
            <h2>Be Happy. Drink Tea.</h2>
            <h3>Tea is a drink that is both tasty and beneficial to health.</h3>
            <p>After water, tea is the most consumed drink in the world. And even though it has a rich history of traditions from every nook and corner of the planet, tea is still very simple to prepare.</p>
            <img className="teaImg" src={tea} alt="icon tea"></img>
            </div>
            <div className="productsShow">
                <img className="qualityPic" src={bambouPic} alt=""></img>
                <img className="qualityPic" src={teaJar} alt=""></img>
                <img className="qualityPic motchaPic" src={motchaPic} alt=""></img>
                <img className="qualityPic" src={divers} alt=""></img>
                <img className="qualityPic" src={yellowPic} alt=""></img>
            </div>
        
        </div>
    )
}

export default Home;