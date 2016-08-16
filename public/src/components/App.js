import React, {Component} from "react";
const Nav = require('./Navigation');

const App = React.createClass({
    getInitialState:function(){
        return {
            name:''
        }
    },
    getName : function(name){
        this.setState({name:name});
        console.log(name)
    },
    render() {
        return (
            <div>
                <Nav name={this.state.name}/>
                {this.props.children && React.cloneElement(this.props.children, {
                    onName: this.getName,
                    name:this.state.name
                })
                }
            </div>
        )
    }
});

export default App;
