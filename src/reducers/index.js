import { combineReducers } from 'redux'
import users from './users'

const adminApp = combineReducers({
    users,
})

export default adminApp
