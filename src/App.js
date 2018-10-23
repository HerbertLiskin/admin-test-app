import React from 'react'
import {
  BrowserRouter,
  Link,
} from 'react-router-dom'

import './style.scss'
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
            <Routes />
        </main>
    </BrowserRouter>
)

export default App
