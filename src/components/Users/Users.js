import React from 'react'
import PropTypes from 'prop-types'

import { UserCard } from '../UI'

import map from 'lodash/map'

import styles from './styles.scss'

const propTypes = {
    users: PropTypes.array,
    deletUser: PropTypes.func.isRequired,
}
const Users = ({ users, deletUser }) => {
    const UsersMap = map(users, (user) => {
        return (
            <UserCard 
                key={`user-${user.ID}`}
                id={user.ID}
                login={user.Login}
                avatarURL={user.AvatarURL}
                deletUser={deletUser}
            />
        )
    })
    return (
        <div className={styles.container}>
            {UsersMap}
        </div>
    )
}

Users.propTypes = propTypes

export default Users
