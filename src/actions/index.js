import { ADD_NEWS } from './actionTypes';
import { LOADING_ERROR } from './actionTypes';
import { LOADING_IN_PROGRESS } from './actionTypes';

export const fetchNews = (path) => {
    return dispatch => {

      dispatch(loadingError(false))

      dispatch(loadingInProgress(true))

      fetch("https://api.canillitapp.com/"+path)
        .then(response => response.json())
        .then(response => {
          dispatch(loadingInProgress(false));
          console.log('news',response);
          dispatch(addNews(response));
        })
        .catch(() => dispatch(loadingError(true)));
    };
  };
  
  export const addNews = news => ({
    type: ADD_NEWS,
    payload: { news }
  });



export const loadingError = bool => (
  {
    type: LOADING_ERROR,
    hasErrored: bool
  }
)

export const loadingInProgress = bool => (
  {
    type: LOADING_IN_PROGRESS,
    isLoading: bool
  }
)
  