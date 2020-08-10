import React from 'react';
import './index.css';
import nophoto from '../../images/no-photo.jpg';

const Card = ({data}) => {
    return(
        <div className="card">
            <img src={(data.img_url===null)? nophoto: data.img_url} alt='breaking new'></img>
            <div className="info">
            <p >{data.title}</p>
            <h3>{data.source_name}</h3>
              
            <button onClick={() => window.open(data.url)} className="button">Ver mas</button>
            </div>
        </div>
    )
}

export default Card;