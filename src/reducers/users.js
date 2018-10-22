import {
    SET_USERS,
    SET_USER,
    SET_USER_FETCHING,
    REMOVE_USER,
    ADD_USER,
} from '../actions'

import cloneDeep from 'lodash/cloneDeep'
import remove from 'lodash/remove'

let initialState = {
    users: [],
    user: null,
    userIsFetching: true,
}

function users(state = initialState, action) {
    let users

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

        case ADD_USER:
            users = cloneDeep(state.users)
            users.unshift(action.user)

            return {
                ...state,
                users,
            }

        case REMOVE_USER:
            users = cloneDeep(state.users)
            
            remove(users, (user) => {
                return user.ID === action.id
            })

            return {
                ...state,
                users,
            }

        default:
            return state
    }
}

export default users
