import React from 'react'
import {
  BrowserRouter,
  Link,
} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import './styles/reset.scss'
import styles from './styles/styles.scss'

import Routes from './Routes'


const App = () => (
    <BrowserRouter>
        <main>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton 
                        color="inherit" 
                        aria-label="Menu"
                        className={styles.menuIcon}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Admin app test
                    </Typography>
                </Toolbar>
            </AppBar>
            <ul>
                <li><Link to="/">Root</Link></li>
            </ul>
            <div className={styles.layout}>
                <Routes />
            </div>
        </main>
    </BrowserRouter>
)

export default App
