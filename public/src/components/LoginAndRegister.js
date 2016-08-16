var React = require('react');
import {browserHistory} from 'react-router';

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
                            <a onClick={this.toLogin} className="title">Login</a>
                        </div>
                        <div className="col-md-6  ">
                            <a onClick={this.toRegister} className="title">Register</a>
                        </div>
                    </div>
                    <hr/>
                    <div className={this.state.fixture ? '' : 'hidden'}>
                        <Login onName={this.props.onName}/>
                    </div>
                    <div className={this.state.fixture ? 'hidden' : ''}>
                        <Register/>
                    </div>
                </div>
               
            );
        }
    })
    ;


var Login = React.createClass({

    login: function () {
        const username = $('#loginName').val();
        const password = $('#loginPassword').val();
        console.log({username, password});
        $.ajax({
            url: '/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({"name": username, "pwd": password}),

            success: function (data, status) {
                if (status === 'success') {
                    if (data === '0') {
                        alert("亲,用户不存在,请先注册哦");
                    } else {
                        alert("嘻嘻,登陆成功啦");
                        this.props.onName(username);

                        browserHistory.push('/');
                    }
                }
            }.bind(this),
        });

    },
    render: function () {
        return (
            <div>
                <div >
                    <input type="text" className="form-control"
                           id="loginName" placeholder="Username"/>
                </div>
                <br/>
                <div>
                    <input type="password" className="form-control"
                           id="loginPassword" placeholder="Password"/>
                </div>
                <div >
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"/> Remember me
                        </label>
                    </div>
                </div>
                <div className="buttonCenter">
                    <button type="submit" onClick={this.login}
                            className="btn btn-default ">Login In
                    </button>
                </div>
            </div>
        )
    }
});


var Register = React.createClass({
    commit: function () {
        const username = $('#user').val();
        const password = $('#password').val();
        const repeatPassword = $('#repeatPassword').val();
        if (username.length >= 2 && (password.length >= 6 && password.length <= 12)) {
            if (password === repeatPassword) {
                $.ajax({
                    url: '/register',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({"name": username, "pwd": password}),
                    success: function (data, status) {
                        if (status == 'success') {
                            if (data === '1') {
                                alert('注册成功啦,请登陆哦');

                            }
                            else {
                                alert("亲,您的账户已存在,不能再进行注册哦");
                            }
                        }
                    }

                });
            } else {
                alert("哎呀,两次密码不同啦,请重新输入吧");
            }
        } else {
            alert("格式不正确,请重新注册!");
        }
    }.bind(this),

    judgeUserName: function () {
        const username = $('#user').val();
        if (username.length < 2) {
            $('.user').append('<div class="remarkName">' + "长度应不小于2位!请修改!" + '</div>');
        } else {
            $(".remarkName").remove();
        }
    },
    judgePassword: function () {
        const password = $('#password').val();
        if (password.length < 6 || password.length > 12) {
            $('.password').append('<div class="remarkPassword">' + "密码应为6到12位!请修改!" + '</div>');
        } else {
            $(".remarkPassword").remove();
        }

    },
    render: function () {
        return (
            <div>
                <div className="user">
                    <input type="text" className="form-control"
                           onChange={this.judgeUserName}
                           id="user" placeholder="Username"/>
                </div>
                <br/>
                <div className="password form-group">
                    <input type="password" className="form-control"
                           onClick={this.judgePassword}
                           id="password" placeholder="Password"/>
                </div>
                <br/>
                <div className="repeatPassword form-group">
                    <input type="password" className="form-control"
                           id="repeatPassword"
                           onClick={this.judgeRepeatPassword}
                           placeholder="Repeat Password"/>
                </div>
                <hr/>
                <div className="buttonCenter">
                    <button type="submit"
                            onClick={this.commit}
                            className="btn btn-default">Sign Up
                    </button>
                </div>

            </div>
        )
    }
});

export default LoginAndRegister;