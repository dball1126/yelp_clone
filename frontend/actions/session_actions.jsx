import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const signup = (user) => {
    return (dispatch) => {
        return SessionApiUtil.signup(user).then(fromServer => {
            return dispatch(receiveCurrentUser(fromServer));
        }, (errors) => { return dispatch(receiveErrors(errors))});
    };
};

export const login = (user) => {
    return (dispatch) => {
        return SessionApiUtil.login(user).then(fromServer => {
            return dispatch(receiveCurrentUser(fromServer))
        }, (errors) => { return dispatch(receiveErrors(errors))});
    };
};

export const logout = (user) => {
    return (dispatch) => {
        return SessionApiUtil.logout(user).then( () => {
            return dispatch(logoutCurrentUser())
        })
    }
}

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser
    }
} 
const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
} 

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors: errors
    }
}