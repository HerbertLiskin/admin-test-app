import { createApolloFetch } from 'apollo-fetch'
// types
export const SET_USERS = 'SET_USERS'
export const SET_USER = 'SET_USER'
export const SET_USER_FETCHING = 'SET_USER_FETCHING'
export const SET_USERS_FETCHING = 'SET_USERS_FETCHING'
export const SET_CREATE_USER_FETCHING = 'SET_CREATE_USER_FETCHING'
export const REMOVE_USER = 'REMOVE_USER'
export const ADD_USER = 'ADD_USER'

const fetch = createApolloFetch({
    uri: 'https://c3interview.danshin.pro/graphql',
})

export function fetchUsers() { 
    return (dispatch) => {
        dispatch(setUsersFetching(true))

        fetch({
            query: '{ Users { ID, Login, AvatarURL } }',
        })
        .then((response) => {
            dispatch(setUsers(response.data.Users))
            dispatch(setUsersFetching(false))
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
        }).then((response) => {
            dispatch(setUser(response.data.User))
            dispatch(setUserFetching(false))
        })
    }
}

export function deletUser(id) {
    return (dispatch) => {
        fetch({
            query: `mutation DeleteUser($id: ID!)  {
                DeleteUser(id: $id) {
                    ID, Login, AvatarURL 
                }
            }`,
            variables: { id },
        }).then((response) => {
            dispatch(removeUser(response.data.DeleteUser.ID))
        })
    }
}

export function createUser(val, avatar) {
    return (dispatch) => {
        dispatch(setCreateUserFetching(true))
        fetch({
            query: `mutation CreateUser($input: CreateUserInput!)  {
                CreateUser(input: $input) {
                    ID, Login, AvatarURL 
                }
            }`,
            variables: { 
                input: {
                    Login: val,
                    AvatarURL: avatar,
                }, 
            },
        }).then((response) => {
            dispatch(addUser(response.data.CreateUser))
            dispatch(setCreateUserFetching(false))
        })
    }
}

export function removeUser(id) {
    return {
        type: REMOVE_USER,
        id,
    }
}

export function addUser(user) {
    return {
        type: ADD_USER,
        user,
    }
}

export function setUserFetching(userIsFetching) {
    return {
        type: SET_USER_FETCHING,
        userIsFetching,
        
    }
}

export function setUsersFetching(usersIsFetching) {
    return {
        type: SET_USERS_FETCHING,
        usersIsFetching,
    }
}

export function setCreateUserFetching(createUserIsFetching) {
    return {
        type: SET_CREATE_USER_FETCHING,
        createUserIsFetching,
    }
}

SET_CREATE_USER_FETCHING

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
