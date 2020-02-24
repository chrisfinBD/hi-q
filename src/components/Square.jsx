import React from 'react'
import '../assets/css/square.css'

const Square = (props) => {
    const selected = (props.selectedRow && props.selectedCol) ?  'selected' : ''
    const classes = `square ${props.square} ${props.selectedRow}`
    return (
        <button className={classes}></button>
    )
}

export default Square