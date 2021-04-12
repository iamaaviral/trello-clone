import React from "react";

const Context = React.createContext();

class BoardContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            dragItem: {
              id: -1,
              parentId: -1
            },
            data: [
                    // {title: 'name', 
                    // item: [
                    //     {title: 'title', desc: 'hu hadsushduashd asd asodaned abpve this is a description for the title mentioned abpvethis is a description for the title mentioned abpve this is a description for the title mentioned abpvethis is a description for the title mentioned abpve this is a description for the title mentioned abpve this is a description for the title mentioned abpvethis is a description for the title mentioned abpvethis is a description for the title mentioned abpvethis is a description for the title mentioned abpve this is a description for the title mentioned abpvethis is a description for the title mentioned abpve this is a description for the title mentioned abpvethis is a description for the title mentioned abpve this is a description for the title mentioned abpve this is a description for the title mentioned abpvethis is a description for the title mentioned abpvethis is a description for the title mentioned abpve'},
                    //     {title: 'title', desc: 'this is a 2nd description for the title mentioned abpve'},
                    //     {title: 'title', desc: 'this is a 3rd description for the title mentioned abpve'}
                    // ]},
                    // {title: 'class',item: [
                    //     {title: 'title', desc: 'this is a class 1st description for the title mentioned abpve'},
                    //     {title: 'title', desc: 'this is a description for the title mentioned abpve'},
                    //     {title: 'title', desc: 'this is a description for the title mentioned abpve'}
                    // ]},
                    // {title: 'age', 
                    // item: [
                    //     {title: 'title', desc: 'this is a description for the title mentioned abpve'},
                    //     {title: 'title', desc: 'this is a description for the title mentioned abpve'},
                    //     {title: 'title', desc: 'this is a description for the title mentioned abpve'}
                    // ]},
                    // {title: 'haha',
                    // item: [
                    //     {title: 'title', desc: 'this is a description for the title mentioned abpve'},
                    //     {title: 'title', desc: 'this is a description for the title mentioned abpve'},
                    //     {title: 'title', desc: 'this is a description for the title mentioned abpve'}
                    // ]},
                    // {title: 'huhuhuhu',
                    // item: [
                    //     {title: 'title', desc: 'this is a description for the title mentioned abpve'},
                    //     {title: 'title', desc: 'this is a description for the title mentioned abpve'},
                    //     {title: 'title', desc: 'this is a description for the title mentioned abpve'}
                    // ]}
                ],
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
                  })
                },
                addList: (value) => {
                    this.setState({
                      data: [...this.state.data, {title: value, item: []}]
                    })
                    
                },
                deleteList: (key) => {
                  let newData = this.state.data;
                  newData.splice(key, 1)
                  this.setState({
                    data: newData
                  })
                }, 
                addItem: (key, value) => {
                  const item = {
                    title: value.title,
                    desc: value.desc
                  }
                  const newData = this.state.data
                  const allItems = this.state.data[key].item.concat([item]);
                  newData[key].item = allItems
                  return Object.assign({}, this.state, {
                    state: { newData, ...this.state },
                  });
                },
                deleteItem: (id, parentId) => {
                  console.log(id, parentId)
                  const newData = this.state.data;
                  newData[parentId].item.splice(id,1)
                  this.setState({data: newData})
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
