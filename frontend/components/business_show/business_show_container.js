import {fetchBusiness, fetchBusinesses} from '../../actions/business_actions';
import BusinessShow from './business_show';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    
    const businessId = parseInt(ownProps.match.params.businessId);
    const business = state.entities.businesses[businessId];  //INVESTIGATE
    
    return {
        business,
        businessId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusiness: (id) => dispatch(fetchBusiness(id))
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);