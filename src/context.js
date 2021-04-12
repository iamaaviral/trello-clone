import React from "react";

const Context = React.createContext();
let dataItem = window.localStorage.getItem("data");
const setCache = (data) => window.localStorage.setItem(
  "data",
  JSON.stringify(data)
)
class BoardContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            dragItem: {
              id: -1,
              parentId: -1
            },
            data: dataItem !== null ? JSON.parse(dataItem) : [],
                setDragItem: (id, parentId) => {
                  this.setState({
                    dragItem: {
                      id,parentId
                    }
                  })
                },
                dropCard: (dropId) => {
                  const {id, parentId} = this.state.dragItem
                  const newItem = this.state.data[parentId].item[id];
                  const allData = this.state.data;
                  allData[dropId].item.unshift(newItem)
                  this.state.deleteItem(id, parentId)
                  this.setState({
                    data: allData
                  },() => setCache(this.state.data))
                },
                addList: (value) => {
                    this.setState({
                      data: [...this.state.data, {title: value, item: []}]
                    },() => setCache(this.state.data))
                    
                },
                deleteList: (key) => {
                  let newData = this.state.data;
                  newData.splice(key, 1)
                  this.setState({
                    data: newData
                  },() => setCache(this.state.data))
                }, 
                addItem: (key, value) => {
                  const item = {
                    title: value.title,
                    desc: value.desc
                  }
                  const newData = this.state.data
                  const allItems = this.state.data[key].item.concat([item]);
                  newData[key].item = allItems
                  this.setState({
                    data: newData
                  },() => setCache(this.state.data))
                },
                deleteItem: (id, parentId) => {
                  console.log(id, parentId)
                  const newData = this.state.data;
                  newData[parentId].item.splice(id,1)
                  this.setState({data: newData},() => setCache(this.state.data))
                }
    };
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const ContextHOC = (SomeComponent, props) => {
  return (
    <Context.Consumer>
      {(val) => <SomeComponent {...val} {...props} />}
    </Context.Consumer>
  );
};

export { ContextHOC, Context, BoardContext };
