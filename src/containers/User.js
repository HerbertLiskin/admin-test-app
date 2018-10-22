import { connect } from 'react-redux'
import User from '../components/User/User'

import { fetchUser } from '../actions/users'

const mapStateToProps = (state, ownProps) => {
    return {
        userId: ownProps.match.params.id,
        userIsFetching: state.users.userIsFetching,
        user: state.users.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => {
            dispatch(fetchUser(id))
        },
    }
}

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

export default UserContainer
