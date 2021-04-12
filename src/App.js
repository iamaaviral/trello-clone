import './App.scss';
import React from 'react'
import EachList from './components/eachList/EachList' 
import { ContextHOC } from "./context";

function App(props) {
  const [addBox, showAddBox] =React.useState(false)

  const toggle = () => {
    showAddBox(!addBox)
  }

  const submit = (e) => {
    if (e.key === "Enter" && e.target.value) {
      props.addList(e.target.value)
      toggle()
    }
 
  } 

  return (
    <div className="App">
      <header>Trello Board</header>
      <div className="body-container">
          {props.data.map((eachList,index) => {
            return ContextHOC(EachList, {eachList: eachList, key: index, id: index})
          })}
          <div className="add-list-btn"><p  onClick={toggle}>Add another list</p> {addBox ? <input onKeyPress={(e) => submit(e)}/>: null}</div>
          
         
      </div>
    </div>
  );
}

export default App;
