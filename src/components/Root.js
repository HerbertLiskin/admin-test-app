import React from 'react'
import PropTypes from 'prop-types'

import Users from './Users/Users'

import isEmpty from 'lodash/isEmpty'

const propTypes = {
    users: PropTypes.array,
    fetchUsers: PropTypes.func.isRequired,
    deletUser: PropTypes.func.isRequired,
}

export class Root extends React.PureComponent {
    componentDidMount() {
        if(isEmpty(this.props.users))
            this.props.fetchUsers()
    }

    render() {
        return (
            <Users 
                users={this.props.users}
                deletUser={this.props.deletUser}
            />
        )
    }
}

Root.propTypes = propTypes

export default Root
