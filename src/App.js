import React from 'react'
import {
  BrowserRouter,
  Link,
} from 'react-router-dom'

import './styles/reset.scss'
import styles from './styles/styles.scss'

import Routes from './Routes'

const App = () => (
    <BrowserRouter>
        <main>
            <div>
                <p>Admin app test</p>
            </div>
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
