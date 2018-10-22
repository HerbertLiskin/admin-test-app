import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import isNull from 'lodash/isNull'

const propTypes = {
    userId: PropTypes.string,
    user: PropTypes.object,
    fetchUser: PropTypes.func.isRequired,
    userIsFetching: PropTypes.bool,
}

export class User extends React.PureComponent {
    componentWillMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        return !this.props.userIsFetching
            ? (
                <div>
                    <div>ID: {this.props.user.ID}</div>
                    {
                        !isNull(this.props.user.AvatarURL)
                            ? (<img src={this.props.user.AvatarURL} alt={this.props.user.ID}/>)
                            : null
                    }
                    <div><Link to={`/`}>go to root -></Link></div>
                </div>
            )
            : (<span>is fetching</span>)
    }
}

User.propTypes = propTypes

export default User
