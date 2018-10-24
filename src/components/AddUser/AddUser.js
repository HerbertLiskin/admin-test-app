import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import styles from './styles.scss'

const propTypes = {
    isFetching: PropTypes.bool,
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
                <TextField
                    id="standard-dense"
                    label="Name"
                    className={styles.input}
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <Button 
                    variant="contained" 
                    color="primary"
                    size="large" 
                    onClick={
                        () => {
                            this.props.createUser(this.state.value, this.state.selectedAvatar)
                        }
                    }
                >
                    Create User
                    {this.props.isFetching && (<div className={styles.preloader}></div>)}
                </Button>
            </div>
        )
    }
 }

AddUser.propTypes = propTypes

export default AddUser