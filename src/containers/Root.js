import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import Root from '../components/Root'

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers())
        },
    }
}

const RootContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)

export default RootContainer
