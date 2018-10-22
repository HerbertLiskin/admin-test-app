import {
    SET_USERS,
    SET_USER,
    SET_USER_FETCHING,
} from '../actions'

let initialState = {
    users: [],
    user: null,
    userIsFetching: true,
}

function users(state = initialState, action) {
    switch (action.type) {
        case SET_USERS: 
            return {
                ...state,
                users: action.users,
            }
        case SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case SET_USER_FETCHING: 
            return {
                ...state,
                userIsFetching: action.userIsFetching,
            }

        default:
            return state
    }
}

export default users
