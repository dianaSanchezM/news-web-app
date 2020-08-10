import React, { useEffect } from 'react';
import Card from '../Card';
import './index.css';

const CardsList = ({category: { path, name}, loadingError, loadingInProgress, news=[], fetchNewsList}) => {

    useEffect(()=>{
        fetchNewsList(path);
    },[path]);
    

    if (loadingError) {
        return (
          <div className="main">
            <h6>Sorry! There was an error loading the repos.</h6>
          </div>
        )
      }
    
      if (loadingInProgress) {
        return (
          <div className="main">
            <h6>Loading…</h6>
          </div>
        )
      }

   
    return (
        <div className='main'>
            {news.map(element => <Card key={element.news_id} data={element} />)}
        </div>
    )
};

export default CardsList;