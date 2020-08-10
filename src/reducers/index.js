import { combineReducers } from 'redux';
import { ADD_NEWS } from '../actions/actionTypes';

const news = (news =[], {type, payload}) => {
    switch (type) {
        case ADD_NEWS:
          return payload.news.slice(0,10);
        default:
          return news;
      }
}

export default combineReducers({
    news
});
