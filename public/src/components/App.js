import React, {Component} from "react";
const Nav = require('./Navigation');
class App extends Component {
   
    render() {
        return (
            <div>
                <Nav/>
              {this.props.children}
            </div>
        )
    }
}

export default App;
