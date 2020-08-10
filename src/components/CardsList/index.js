import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';
import Card from '../Card';
import './index.css';

const CardsList = ({category: { path, name}, news=[], fetchNewsList}) => {

    useEffect(()=>{
        console.log(path);
        fetchNewsList(path);
    },[path]);
    
    return (
        <div className='main'>
            {news.map(element => <Card data={element} />)}
        </div>
    )
};

const mapStateToProps = ({ news }) => ({ news });

const mapDispatchToProps = dispatch => {
    return {
        fetchNewsList(path) {
          dispatch(fetchNews(path));
        }
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);