import React from 'react'
import './index.scss'

const EachItem =(props) => {

    const onDrag = (id, parentId) => {
       props.setDragItem(id, parentId)
      };

    return (
    <div className="ei-wrapper" draggable="true" onDragStart={(e) => onDrag(props.id, props.parentid)}>
        <div className=" close clickabke" onClick={() => props.deleteItem(props.id, props.parentid)}>x</div>
        <div>{props.item.title}</div>
        <div>{props.item.desc}</div>
    </div>
    ) 
}

export default EachItem