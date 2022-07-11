// TODO

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done:false
    };
  }

  setState(obj) {
    this.state.done = obj.done;
    ReactDOM.render(<GroceryList />, document.getElementById("app"));
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
    console.log(document.getElementById("test"));
  }


  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal',
    };
    return (
      <li id="test" style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

// var GroceryListItem = (props) => {
//   var onListItemClick = (event) => {
//     console.log('clicked');
//   }
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//     </ul>
//   )
// }

var GroceryList = (props) => {
  props.todos=['watermelon', 'beef'];
  return (
    <ul>
      {props.todos.map(todo =>
        <GroceryListItem todo={todo} /> //todo becomes the property of props of GroceryListItem
      )}
    </ul>
    )
};
ReactDOM.render(<GroceryList />, document.getElementById("app"));

