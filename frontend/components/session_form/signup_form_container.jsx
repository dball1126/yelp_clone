import { connect } from 'react-redux';
import React from 'react';
import sessionForm from './session_form';
import { Link } from 'react-router-dom'
import {signup} from '../../actions/session_actions';

const mapStateToProps = ({errors}) => {
    return {
        formType: 'SignUp',
        navLink: <Link to="/signup">Signup</Link>,
        errors: errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processingForm: (user) => dispatch(signup(user))

    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)(sessionForm);