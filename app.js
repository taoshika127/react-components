// TODO

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done:false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onmouseover() {
    this.setState({
      done: true
    });
  }

  onmouseout() {
    this.setState({
      done: false
    });
  }


  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal',
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onmouseover.bind(this)} onMouseOut={this.onmouseout.bind(this)}>{this.props.todo}</li>
    );
  }
}

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

