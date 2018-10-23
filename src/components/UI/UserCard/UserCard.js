import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

import isNull from 'lodash/isNull'

import styles from './styles.scss'

import placeholder from '../../../assets/user-card-placeholder.png'

const propTypes = {
    id: PropTypes.string,
    login: PropTypes.string,
    avatarURL: PropTypes.string,
    deletUser: PropTypes.func.isRequired,
}

const UserCard = ({ id, login, avatarURL, deletUser }) => {
    return (
        <div className={styles.container}>
            <div className={styles.login}>Login: {login}</div>
            {
                    !isNull(avatarURL)
                        ? (<img src={avatarURL} alt={id}/>)
                        : (<img src={placeholder} alt={id}/>)
                }
            <Link 
                    className={styles.goToUser}
                    to={`/user/${id}`}
                >
                    go to user
            </Link>
            <div className={styles.delete}>
                <Button 
                    variant="contained" 
                    color="secondary"
                    size="large" 
                    onClick={
                        () => {
                            deletUser(id)
                        }
                    }
                >
                    Delet User
                    <DeleteIcon className={styles.deleteIcon} />
                </Button>
            </div>
        </div>
    )
}

UserCard.propTypes = propTypes

export default UserCard
