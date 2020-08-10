import { connect } from 'react-redux'
import CardsList from '../components/CardsList';
import { fetchNews } from '../actions';


const mapStateToProps = ({ news, loadingError, loadingInProgress}) => ({ news, loadingError, loadingInProgress});

const mapDispatchToProps = dispatch => {
    return {
        fetchNewsList(path) {
          dispatch(fetchNews(path));
        }
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);