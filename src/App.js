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
          {props.data.map(eachList => {
            return <EachList title={eachList.title} items={eachList.item}/>
          })}
          <div class="add-list-btn"><p  onClick={toggle}>Add another list</p> {addBox ? <input onKeyPress={(e) => submit(e)}/>: null}</div>
          
         
      </div>
    </div>
  );
}

export default App;
