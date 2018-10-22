import React from 'react'
import PropTypes from 'prop-types'

import styles from './AddUser.scss'

const propTypes = {
    createUser: PropTypes.func.isRequired,
}

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
 
        this.handleChange = this.handleChange.bind(this)
    } 
  
    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    render() {
        return(
            <div className={styles.container}>
                <input 
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <div 
                    className={styles.button}
                    onClick={
                        () => {
                            this.props.createUser(this.state.value)
                        }
                    }>
                    Create User
                </div>
            </div>
            
        )
    }
 }

AddUser.propTypes = propTypes

export default AddUser