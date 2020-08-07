import React, { useState, useEffect } from "react"
import MaterialCard from "./MaterialCard.js"
import axios from 'axios';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandPointDown} from '@fortawesome/free-solid-svg-icons';
import websiteLogo from "../assets/images/website_logo.jpg"

function Home(){

    const [materials, setMaterial] = useState([]);

    const handleClick = () => {   
        setMaterial([])
        axios.get("/materials")
            .then(res => {
                console.log(res);
                setMaterial(res.data.materials);
            })
            .catch(err => {
                console.log(err);
        })
    }


    const materialsArray = materials.map(material =>
        <MaterialCard imgUrl={material.imageFile} sloganText={material.sloganText} likes={material.likes} dislikes={material.dislikes} id={material.id}
        />)

    return(
        <div className="home">
            <div className="block-content">
                <img src={websiteLogo} alt="website logo" height="350" width="350"/>
                <h1>AIContentCreator.org</h1>
                <h3>An A.I-enabled content creation engine to offer inspirations for artists and digital marketing professionals. <br /><br /><hr /></h3> 
            </div>
            <h4> <FontAwesomeIcon icon={faHandPointDown} /> Click the button below to check out our A.I.-generated digital marketing materials for coffee-related business! <FontAwesomeIcon icon={faHandPointDown} /><br /> </h4>
            <p>
                <button type="button" class="generate-button" onClick={handleClick}> Generate Materials </button>
            </p>
            {materialsArray}
        </div>
    )
}

 

export default Home