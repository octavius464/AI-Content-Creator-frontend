import React, {useState, useEffect} from 'react';
import "./MaterialCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faDownload, faShare} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function MaterialCard(props){

    const [likes, setLikes] = useState(props.likes);
    const [dislikes, setDislikes] = useState(props.dislikes);

    const handleLikeClick = () => {
        setLikes(likes + 1)
        axios.patch('/materials/' + props.id, [
            {"propName": "likes",
             "value": likes} 
        ])
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const handleDislikeClick = () => {
        setDislikes(dislikes + 1)
        
        axios.patch('/materials/' + props.id, [
            {"propName": "dislikes",
             "value": dislikes} 
        ])
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div className="material-card-container">
            <div className="material-card-center">
                <img src={props.imgUrl} alt={props.sloganText}/>
                <div><h3>{props.sloganText}</h3></div>
                <div>
                    <button type="button" className="material-button" title="I like this" onClick={handleLikeClick}><FontAwesomeIcon icon={faThumbsUp} color="gray"/></button>
                    <span className="material-button-text">  {likes} </span>
                    &nbsp; 
                    <button type="button" className="material-button" title="I dislike this" onClick={handleDislikeClick}><FontAwesomeIcon icon={faThumbsDown} color="gray"/></button>
                    <span className="material-button-text">  {dislikes} </span>
                    <span className="download-share-buttons">    
                        &nbsp; &nbsp;
                        <button type="button" className="material-button" title="Download"><FontAwesomeIcon icon={faDownload} color="gray"/></button>
                        &nbsp; &nbsp;
                        <button type="button" className="material-button" title="Share"><FontAwesomeIcon icon={faShare} color="gray"/></button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MaterialCard
