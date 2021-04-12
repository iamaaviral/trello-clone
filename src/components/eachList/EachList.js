import React from 'react'
import EachItem from '../eachItem/EachItem'
import './index.scss'

const initialValues = {
    title: "",
    desc: "",
  };

const EachList = (props) => {
    const [addBox, showAddBox] = React.useState(false)
    const [values, setValues] = React.useState(initialValues);
    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

    const toggle = () => {
        showAddBox(!addBox)
      }  

    const submit = (e, key) => {
        if (values.title && values.desc) {
            props.addItem(key,  {title: values.title, desc: values.desc})
            setValues(initialValues)
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
            <div className="el-header"><div className="el-text">{props.eachList.title}</div><span className="clickable" onClick={() =>  props.deleteList(props.id)}>x</span></div>
            <div className="ei-container">{props.eachList.item && props.eachList.item.map((item,index) => {
                return <EachItem item={item} key={index} id={index} parentid={props.id} setDragItem={props.setDragItem} deleteItem={props.deleteItem}/>
            })}<div  className="clickable" onClick={(e) => toggle(e,props.id) }> + add new item</div>
             {addBox ? 
             <div>
                 <input 
                    value={values.title}
                    onChange={handleInputChange}
                    name="title"
                />
                 <textarea
                    style={{resize: 'none'}}
                    value={values.desc}
                    onChange={handleInputChange}
                    name="desc"
                />
                <button onClick={(e) => submit(e, props.id)}>Add</button>
            </div>: null}
            </div>
        </div>
        )
}

export default EachList