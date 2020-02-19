// var App = () => (
//     <div>
//       <h2>My Grocery List</h2>
//       <GroceryList groceries={['Cucumber', 'Kale', 'Tomato']}/> 
//     </div>
//   );



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
        var linkStyle;
        if (this.state.hover) {
        linkStyle = {color: '#ed1212',cursor: 'pointer'}
        } else {
        linkStyle = {color: '#000'}
        }
	    return(
        <p style={linkStyle} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>{this.props.groceryItem}</p>
        
        // var groceries = ['Cucumber, Kale, Tomato']
        // return (
        // <li>{this.props.groceries}</li>        
        // );
        );
    }   

}

var GroceryList = (props) => (
    <div>
        {props.groceryItems.map((groceryItem, index) =>
        <GroceryListItem groceryItem={groceryItem} key={index} />
        )}
    </div>

);

const app = document.getElementById("app");
ReactDOM.render(<GroceryList groceryItems={['drugs', 'alcohol']} />, app);



 
