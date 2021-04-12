import './App.scss';
import EachList from './components/eachList/EachList' 
import { ContextHOC } from "./context";

function App(props) {
  return (
    <div className="App">
      <header style={{width: '100%'}}>Trello Board</header>
      <div className="body-container">
          {props.data.map(eachList => {
            return <EachList title={eachList.title} items={eachList.item}/>
          })}
          <div class="add-btn"><p style={{flexShrink: 0}}>Add another list</p></div>
      </div>
    </div>
  );
}

export default App;
