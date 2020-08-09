import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';
import Card from '../Card';

const CardsList = ({category: { path, name}, news=[], fetchNewsList}) => {

    useEffect(()=>{
        
        fetchNewsList(path);
    }, []);
    
    return (
        <div>
            {news.map(element => <Card newData={element} />)}
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