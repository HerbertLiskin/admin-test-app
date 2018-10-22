import { connect } from 'react-redux'
import { 
    fetchUsers,
    deletUser, 
    createUser,
} from '../actions/users'

import Root from '../components/Root'

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        usersIsFetching: state.users.usersIsFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers())
        },
        deletUser: (id) => {
            dispatch(deletUser(id))
        },
        createUser: (val, avator) => {
            dispatch(createUser(val, avator))
        },
    }
}

const RootContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)

export default RootContainer
