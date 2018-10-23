import React from 'react'
import PropTypes from 'prop-types'

import { UserCard } from '../UI'

import map from 'lodash/map'

// import styles from './styles.scss'
import Grid from '@material-ui/core/Grid'

const propTypes = {
    users: PropTypes.array,
    deletUser: PropTypes.func.isRequired,
}
const Users = ({ users, deletUser }) => {
    const UsersMap = map(users, (user) => {
        return (
            <Grid item xs={12} sm={4} md={3} lg={2} key={`user-${user.ID}`}>
                <UserCard 
                    id={user.ID}
                    login={user.Login}
                    avatarURL={user.AvatarURL}
                    deletUser={deletUser}
                />
            </Grid>
        )
    })
    return (
        <Grid container spacing={24}>
            {UsersMap}
        </Grid>
    )
}

Users.propTypes = propTypes

export default Users
