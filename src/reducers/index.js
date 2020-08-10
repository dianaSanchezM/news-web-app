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

const loadingError = (error = false, action) => {
  switch (action.type) {
    case 'LOADING_ERROR':
      return action.hasErrored;
    default:
      return error;
  }
}

const loadingInProgress = (loading = false, action) => {
  switch (action.type) {
    case 'LOADING_IN_PROGRESS':
      return action.isLoading;
    default:
      return loading;
  }
}

export default combineReducers({
  loadingError,
  loadingInProgress,
  news
});
