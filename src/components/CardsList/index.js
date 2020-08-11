import React, { useEffect, useState } from 'react';
import Card from '../Card';
import './index.css';

const CardsList = ({category: { path, name}, loadingError, loadingInProgress, news=[], fetchNewsList}) => {
  const [ index, setIndex ] = useState(0);

    useEffect(()=>{
      setIndex(0);
      fetchNewsList(path);
    },[path]);
    

    if (loadingError) {
        return (
          <div className="main">
            <h6>Sorry! There was an error loading the news.</h6>
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
    
    const handleClick = (num) =>{
      setIndex(index + num);
    }

    console.log();
    return (
      <div>
        <div className='main'>
          <div className='grid'>
            {news.slice(0+index*10,10+index*10).map(element => <Card key={element.news_id} data={element} />)}
            </div>
            <div className='pagination'>
              <button onClick={()=>handleClick(-1)}>-</button>
              {index}
              <button onClick={()=>handleClick(1)}>+</button>
            </div>
        </div>
        
      </div>
    )
};

export default CardsList;