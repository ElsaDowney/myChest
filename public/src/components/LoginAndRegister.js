var React = require('react');
import Login from  './Login';
// const {'default':Login} = require('./Login');
import  Register from  './Register';


const style = {
    backgroundImage: 'url(' + '../../images/ydd21.jpg' + ')',
    WebkitTransition: 'all',
    msTransition: 'all'
};

var LoginAndRegister = React.createClass({
        getInitialState: function () {
            return {
                tab: true
            }
        },
        toLogin: function () {
            this.setState({tab: true});
        },
        toRegister: function () {
            this.setState({tab: false})
        },
        render: function () {
            return (
                <div className="loginbackground">
                    <div className="panel-heading container loginStyle" id="center" style={style}>
                        <div className="row">
                            <div className="col-md-6 ">
                                <a onClick={this.toLogin} className="title">Login In</a>
                            </div>
                            <div className="col-md-6  ">
                                <a onClick={this.toRegister} className="title">Sign Up</a>
                            </div>
                        </div>
                        <hr/>
                        <div className={this.state.tab ? '' : 'hidden'}>
                            <Login onName={this.props.onName}/>
                        </div>
                        <div className={this.state.tab ? 'hidden' : ''}>
                           <Register/>
                        </div>
                    </div>
                </div>
            );
        }
    });

export default LoginAndRegister;

// module.exports = {
//     'default': LoginAndRegister
// }