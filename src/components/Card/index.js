import React from 'react';
import './index.css';
import nophoto from '../../images/no-photo.jpg';

const Card = ({data}) => {
    console.log(data);
    return(
        <div className="card">
            <img src={(data.img_url===null)? nophoto: data.img_url} alt='picture'></img>
            <div className="info">
            <p >{data.title}</p>
            <h3>{data.source_name}</h3>
              
            <a href={data.url} className="button">Ver mas</a>
            </div>
        </div>
    )
}

export default Card;