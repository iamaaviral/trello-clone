import React from "react";

const Context = React.createContext();

class BoardContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            data: [
                    {title: 'name', 
                    item: [
                        {title: 'title', desc: 'this is a description for the title mentioned abpve this is a description for the title mentioned abpvethis is a description for the title mentioned abpve this is a description for the title mentioned abpvethis is a description for the title mentioned abpve this is a description for the title mentioned abpve this is a description for the title mentioned abpvethis is a description for the title mentioned abpvethis is a description for the title mentioned abpvethis is a description for the title mentioned abpve this is a description for the title mentioned abpvethis is a description for the title mentioned abpve this is a description for the title mentioned abpvethis is a description for the title mentioned abpve this is a description for the title mentioned abpve this is a description for the title mentioned abpvethis is a description for the title mentioned abpvethis is a description for the title mentioned abpve'},
                        {title: 'title', desc: 'this is a description for the title mentioned abpve'},
                        {title: 'title', desc: 'this is a description for the title mentioned abpve'}
                    ]},
                    {title: 'class',item: [
                        {title: 'title', desc: 'this is a description for the title mentioned abpve'},
                        {title: 'title', desc: 'this is a description for the title mentioned abpve'},
                        {title: 'title', desc: 'this is a description for the title mentioned abpve'}
                    ]},
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
                addList: (value) => {
                  console.log(value)
                    this.setState({
                      data: [...this.state.data, {title: value, item: []}]
                    })
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
