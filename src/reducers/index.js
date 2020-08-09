import { combineReducers } from 'redux';
import { ADD_NEWS } from '../actions/actionTypes';

const news = (news =[], {type, payload}) => {
    switch (type) {
        case ADD_NEWS:
          return payload.news;
        default:
          return news;
      }
}

export default combineReducers({
    news
});
