import React from 'react'
import PropTypes from 'prop-types'

import styles from './AddUser.scss'

const propTypes = {
    createUser: PropTypes.func.isRequired,
}

class AddUser extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            value: '',
            selectedAvatar: null,
        }
 
        this.handleChange = this.handleChange.bind(this)
        // this.fileChange = this.fileChange.bind(this)
    } 
  
    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    // fileChange(e) {
    //     this.setState({ selectedAvatar: e.target.files[0].name })
    // }

    render() {
        return(
            <div className={styles.container}>
                <input 
                    className={styles.input}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                {/* <input 
                    type="file" 
                    onChange={this.fileChange} 
                /> */}
                <div 
                    className={styles.button}
                    onClick={
                        () => {
                            this.props.createUser(this.state.value, this.state.selectedAvatar)
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