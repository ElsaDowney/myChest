import React, {Component} from "react";
var Link = require('react-router').Link;
class Nav extends Component {

    render() {
        return (
            <div className="navbar-wrapper">
                <div className="container">

                    <nav className="navbar navbar-inverse navbar-static-top ">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">衣搭搭</a>
                            </div>
                            <div classID="navbar" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active"><Link to='/'>首页</Link></li>
                                    <li><Link to='ClothesList'>我的衣柜</Link></li>
                                    <li><Link to='AllMatches'>我的搭配</Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to='LoginAndRegister'>登陆/注册</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>

        )
    }
}
module.exports = Nav;