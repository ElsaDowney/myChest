import React, {Component} from "react";
const Nav = require('./navigation');
const Home = require('./Home');
class App extends Component {
   
    render() {
        return (
            <div>
                <Nav />
                <Home />
            </div>
        )
    }
}


export default App;
