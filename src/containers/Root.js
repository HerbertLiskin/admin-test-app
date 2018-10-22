import { connect } from 'react-redux'
import { 
    fetchUsers,
    deletUser, 
} from '../actions'

import Root from '../components/Root'

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
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
    }
}

const RootContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)

export default RootContainer
