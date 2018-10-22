import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.scss'

const propTypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium']), 
}

const Preloader = ({ text, size }) => {
    // debugger
    // return (<div>{text}</div>)
    return (
        <div className={styles.container}>
            <div className={
                classNames(styles.preloaderImage, styles[size])
                }
            ></div>
            {text && 
                (<span>{text}</span>)
            }
        </div>
    )
}

Preloader.propTypes = propTypes
// Preloader.defaultProps = { size: 'medium' }

export default Preloader
