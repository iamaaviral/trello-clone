import React from 'react'
import EachItem from '../eachItem/EachItem'
import './index.scss'

const EachList = (props) => {
    const [addBox, showAddBox] =React.useState(false)
    
    const toggle = () => {
        showAddBox(!addBox)
      }  

    const submit = (e, key) => {
        if (e.key === "Enter" && e.target.value) {
            props.addItem(key,  {title: e.target.value, desc: e.target.value})
            toggle()
        }
      }

        return (
        <div className="el-wrapper"
        id={props.id} 
        onDragOver={(event) => {
            event.stopPropagation();
            event.preventDefault();
          }}
        onDrop={(event) => {
            if (props.dragItem.parentId === props.id) {
              return
            } else {
                props.dropCard(props.id)
            }
          }}>
            <div className="el-header"><div className="el-text">{props.eachList.title}</div><span onClick={() =>  props.deleteList(props.id)}>x</span></div>
            <div className="ei-container">{props.eachList.item && props.eachList.item.map((item,index) => {
                return <EachItem item={item} key={index} id={index} parentid={props.id} setDragItem={props.setDragItem} deleteItem={props.deleteItem}/>
            })}<div onClick={(e) => toggle(e,props.id) }>add new item</div>
             {addBox ? <input onKeyPress={(e) => submit(e, props.id)}/>: null}
            </div>
        </div>
        )
}

export default EachList