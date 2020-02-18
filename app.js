var App = () => (
    <div>
      <h2>My Grocery List</h2>
      <GroceryList groceries={['Cucumber', 'Kale', 'Tomato']}/> 
    </div>
  );

const app = document.getElementById("app");
ReactDOM.render(<GroceryList />, app);

class GroceryListItem  extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover:false,
        };
    }
    //make bold when mouse hover
    toggleHover() {
        this.setState({
          hover: !this.state.hover
        });
      }
    render() {
        var groceries = ['Cucumber, Kale, Tomato']
        return (
        <li>{this.props.groceries}</li>        
        );
    }

}

var GroceryList = (props) => (
    <div>
        {props.groceries.map(groceryItem =>
        <GroceryListItem groceryItem={groceryItem} />
        )}
    </div>

);


 
