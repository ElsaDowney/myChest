import React, {Component} from "react";
var Link = require('react-router').Link;
const Nav = React.createClass({

    logout:function () {
        location.href='/'
    },
    render() {
        let info = '';
        console.log(this.props.name);
        if (this.props.name) {
            info = this.props.name + '你好!';
        }
        else {
            info = '登陆/注册'
        }
        return (
            <div className="navbar-wrapper">
                <div className="container-fluid">

                    <nav className="navbar navbar-inverse navbar-static-top ">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">衣搭搭</a>
                            </div>
                            <div classID="navbar" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active"><Link to='/'>首页</Link></li>
                                    <li><Link to='ClothesList'>我的衣柜</Link></li>
                                    <li><Link to='AddList'>添加美衣</Link></li>
                                    <li><Link to='AllMatches'>我的搭配</Link></li>
                                </ul>

                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to='LoginAndRegister'>{info}</Link></li>
                                    <li className={this.props.name===''?'hidden':''}>
                                        <a  className="loginOut" onClick={this.logout}>退出</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>
            </div>

        )
    }
});
module.exports = Nav;