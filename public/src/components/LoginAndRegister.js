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
                fixture: true
            }
        },
        toLogin: function () {
            this.setState({fixture: true});
        },
        toRegister: function () {
            this.setState({fixture: false})
        },
        render: function () {
            return (

                <div className="panel-heading container " id="center" style={style}>
                    <div className="row">
                        <div className="col-md-6 ">
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
        // this.props.onName(username)
        $.ajax({
            url: '/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({"name": username, "pwd": password}),

            success: function (data, status) {
                if (status == 'success') {
                    if (data === '0') {
                        alert("用户不存在,请先注册");
                    } else {
                        alert("登陆成功");
                        // location.href='/'
                        this.props.onName(username);

                        browserHistory.push('/');
                    }
                }
            }.bind(this),
            error: function (data, status) {
                if (status == "error") {
                    // location.href='login'
                }
            }
        });

    },
    render: function () {
        return (
            <div>
                <div >
                    用户名: <input type="text" className="form-control"
                                id="loginName" placeholder="请输入用户名"/>
                </div>
                <div>
                    密码: <input type="password" className="form-control"
                               id="loginPassword" placeholder="请输入密码"/>
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
                            className="btn btn-default ">登陆
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
        if (password === repeatPassword) {
            $.ajax({
                url: '/register',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({"name": username, "pwd": password}),
                success: function (data, status) {
                    if (status == 'success') {
                        if (data === '1') {
                            alert('注册成功');
                            location.href = '/'
                        }
                        else {
                            alert("该用户已存在,不能进行注册");
                        }
                    }
                }
                // ,
                // error: function (data, status) {
                //     if (status == "error") {
                //         // location.href='login'
                //     }
                // }
            });
        } else {
            alert("两次密码不同,请重新输入");
        }
    },
    judgeUserName: function () {
        const username = $('#user').val();
        if (username.length < 2) {
            $('.user').append('<div class="remark">' + "长度应不小于2位!请修改!" + '</div>');
        } else {
            $(".remark").remove();
        }
    },
    judgePassword: function () {
        const password = $('#password').val();
        if (password.length < 6 || password.length > 12) {
            $('.password').append('<div class="remark">' + "密码应为6到12位!请修改!" + '</div>');
        } else {
            $(".remark").remove();
        }

    },
    render: function () {
        return (
            <div>
                <div className="user">
                    用户名:
                    <input type="text" className="form-control"
                           onChange={this.judgeUserName}
                           id="user" placeholder="请输入用户名"/>
                </div>

                <div className="password form-group">
                    密码: <input type="password" className="form-control"
                               onClick={this.judgePassword}
                               id="password" placeholder="请输入密码"/>
                </div>
                <div className="repeatPassword form-group">
                    再次确认密码: <input type="password" className="form-control"
                                   id="repeatPassword"
                                   onClick={this.judgeRepeatPassword}
                                   placeholder="请再次确认密码"/>
                </div>
                <hr/>
                <div className="buttonCenter">
                    <button type="submit"
                            onClick={this.commit}
                            className="btn btn-default">注册
                    </button>
                </div>

            </div>
        )
    }
});

export default LoginAndRegister;