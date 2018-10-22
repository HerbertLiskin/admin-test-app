import {createApolloFetch} from 'apollo-fetch'
// types
export const SET_USERS = 'SET_USERS'
export const SET_USER = 'SET_USER'
export const SET_USER_FETCHING = 'SET_USER_FETCHING'


const fetch = createApolloFetch({
    uri: 'https://c3interview.danshin.pro/graphql',
})

export function fetchUsers() { 
    return (dispatch) => {
        fetch({
            query: '{ Users { ID, Login, AvatarURL } }'
        })
        .then(response => {
            dispatch(setUsers(response.data.Users))
        })
    }
}

export function fetchUser(id) {
    return (dispatch) => {
        dispatch(setUserFetching(true))

        fetch({
            query: `query User($id: ID!)  {
                User(id: $id) {
                 ID, Login, AvatarURL 
                }
            }`,
            variables: { id: id },
        }).then(response => {
            dispatch(setUser(response.data.User))
            dispatch(setUserFetching(false))
        })
    }
}

export function setUserFetching(userIsFetching) {
    return {
        type: SET_USER_FETCHING,
        userIsFetching,
        
    }
}

export function setUser(user) {
    return {
        type: SET_USER,
        user,
    }
}

export function setUsers(users) {
    return {
        type: SET_USERS,
        users,
    }
}