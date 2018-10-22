import React from 'react'
import PropTypes from 'prop-types'

import Users from './Users/Users'
import AddUser from './AddUser/AddUser'
import { Preloader } from './UI'

import isEmpty from 'lodash/isEmpty'

const propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            ID: PropTypes.string.isRequired,
            Login: PropTypes.string.isRequired,
            AvatarURL: PropTypes.string,
        })
    ),
    usersIsFetching: PropTypes.bool,
    fetchUsers: PropTypes.func.isRequired,
    deletUser: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
}

export class Root extends React.PureComponent {
    componentDidMount() {
        if(isEmpty(this.props.users))
            this.props.fetchUsers()
    }
    
    renderUsers() {
        const { 
            usersIsFetching, 
            users, 
            deletUser,
        } = this.props
        // debugger
        return !usersIsFetching
            ? (
                <Users 
                    users={users}
                    deletUser={deletUser}
                />  
            )
            : (
                <Preloader 
                    text={'loading'}
                />
                
            )
    }

    render() {
        return (
            <div>
                <AddUser createUser={this.props.createUser}/>
                {this.renderUsers()}
            </div>
            
        )
    }
}

Root.propTypes = propTypes

export default Root
