import React, { Component } from 'react'
import {
  BrowserRouter,
  Link,
} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'

import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

import './styles/reset.scss'
import styles from './styles/styles.scss'

import Routes from './Routes'


class App extends Component {
    constructor(props) {
        super(props) 

        this.state = { 
            top: false,
            left: false,
            bottom: false,
            right: false,
        }

        this.toggleDrawer = this.toggleDrawer.bind(this)
    } 
    toggleDrawer(side, open) {
        this.setState({
            [side]: open,
        })
    }
    
    render() {
        return (
            <BrowserRouter>
                <main>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton 
                            color="inherit" 
                            aria-label="Menu"
                            className={styles.menuIcon}
                            onClick={() => {this.toggleDrawer('left', true)}}
                        >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                                Admin app test
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer open={this.state.left} onClose={() => {this.toggleDrawer('left', false)}}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={() => {this.toggleDrawer('left', false)}}
                            onKeyDown={() => {this.toggleDrawer('left', false)}}
                        >

                            <Link to="/">Root</Link>
                        </div>
                    </Drawer>
                    <ul>
                        <li></li>
                    </ul>
                    <div className={styles.layout}>
                        <Routes />
                    </div>
                </main>
            </BrowserRouter>
        )
    }
}

export default withStyles(styles)(App)
