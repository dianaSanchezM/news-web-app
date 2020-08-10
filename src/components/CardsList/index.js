import React, { useEffect } from 'react';
import Card from '../Card';
import './index.css';

const CardsList = ({category: { path, name}, loadingError, loadingInProgress, news=[], fetchNewsList}) => {

    useEffect(()=>{
        console.log(path);
        fetchNewsList(path);
    },[path]);
    

    if (loadingError) {
        console.log('LOADING ERROR');
        return (
          <div className="main">
            <h6>Sorry! There was an error loading the repos.</h6>
          </div>
        )
      }
    
      if (loadingInProgress) {
          console.log('LOADING DATA');
        return (
          <div className="main">
            <h6>Loading…</h6>
          </div>
        )
      }

   
    return (
        <div className='main'>
            {news.map(element => <Card data={element} />)}
        </div>
    )
};

export default CardsList;