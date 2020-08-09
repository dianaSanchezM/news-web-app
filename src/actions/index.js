import { ADD_NEWS } from './actionTypes';

export const fetchNews = (path) => {
    console.log('fetch', path);
    return dispatch => {
      fetch("https://api.canillitapp.com/"+path)
        .then(response => response.json())
        .then(response => {
          console.log("response", response);
          dispatch(addNews(response));
        });
    };
  };
  
  export const addNews = news => ({
    type: ADD_NEWS,
    payload: { news }
  });
  