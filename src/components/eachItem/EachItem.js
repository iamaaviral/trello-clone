import React from 'react'
import './index.scss'

const EachItem =(props) => {
    return (
    <div className="ei-wrapper">
        <div>{props.item.title}</div>
        <div>{props.item.desc}</div>
    </div>
    )
}

export default EachItem