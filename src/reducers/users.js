import {
    SET_USERS,
    SET_USER,
    SET_USER_FETCHING,
    SET_USERS_FETCHING,
    SET_CREATE_USER_FETCHING,
    REMOVE_USER,
    ADD_USER,
} from '../actions/users'

import cloneDeep from 'lodash/cloneDeep'
import remove from 'lodash/remove'

let initialState = {
    users: [],
    user: null,
    userIsFetching: true,
    usersIsFetching: true,
    createUserIsFetching: false,
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
        
        case SET_USERS_FETCHING: 
            return {
                ...state,
                usersIsFetching: action.usersIsFetching,
            }
        case SET_CREATE_USER_FETCHING:
            return {
                ...state,
                createUserIsFetching: action.createUserIsFetching,
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
