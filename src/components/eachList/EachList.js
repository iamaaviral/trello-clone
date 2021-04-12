import React from 'react'
import EachItem from '../eachItem/EachItem'
import './index.scss'

const EachList = (props) => {
    return (
        <div className="el-wrapper">
            <div className="el-header"><div className="el-text">{props.title}</div></div>
            <div className="ei-container">{props.items && props.items.map((item) => {
                return <EachItem item={item}/>
            })}</div>
        </div>
        )
}

export default EachList