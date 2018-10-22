import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import map from 'lodash/map'
import isNull from 'lodash/isNull'

import styles from './Users.scss'

const propTypes = {
    users: PropTypes.array,
    deletUser: PropTypes.func.isRequired,
}
const Users = ({ users, deletUser }) => {
    const usersMap = map(users, (user) => {
        return (
            <div 
                key={`user-${user.ID}`}
                className={styles.container}
            >
                <div>ID: {user.Login}</div>
                {
                    !isNull(user.AvatarURL)
                        ? (<img src={user.AvatarURL} alt={user.ID}/>)
                        : (<span className={styles.fakeAvatar}>This is AVATAR</span>)
                }
                <div>
                    <Link to={`/user/${user.ID}`}>go to user</Link>
                </div>
                <div onClick={
                    () => {
                        deletUser(user.ID)
                    }
                    }>
                    DELETE USER
                </div>
            </div>
        )
    })

    return (
        <div>{usersMap}</div>
    )
}

Users.propTypes = propTypes

export default Users
