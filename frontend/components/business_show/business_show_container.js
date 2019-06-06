import {fetchBusiness, fetchBusinesses} from '../../actions/business_actions';
import BusinessShow from './business_show';
import {connect} from 'react-redux';
import {selectBusinessReviews, selectBusiness} from '../../reducers/selectors';
// import { fetchReviews} from '../../actions/review_actions';
const mapStateToProps = (state, ownProps) => {
    const businessId = ownProps.match.params.businessId;
    const business = selectBusiness(state.entities, businessId);
    // const business = state.entities.businesses[businessId] || {reviews: []};  //INVESTIGATE
    
    const reviews = selectBusinessReviews(state.entities, business);
    debugger
    return {
        business,
        businessId,
        reviews
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusiness: (id) => dispatch(fetchBusiness(id))
        // fetchReviews: () => dispatch(fetchReviews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);