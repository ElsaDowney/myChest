var React = require('react');

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
            <div className="panel-heading" id="center">
                <div className="row">
                    <div className="col-md-6 login" >
                        <a onClick={this.toLogin}  className="title">Login</a>
                    </div>
                    <div className="col-md-6  register">
                        <a onClick={this.toRegister} className="title">Register</a>
                    </div>
                </div>
                <hr/>
                <div className={this.state.fixture ? '' : 'hidden'}>
                    <Login/>
                </div>
                <div className={this.state.fixture ? 'hidden' : ''}>
                    <Register/>
                </div>
            </div>
        );
    }
});


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
                if (status == 'success') {
                    if (data === '0') {
                        alert("用户不存在,请先注册");
                    } else {
                        alert("登陆成功");
                    }
                }
            },
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

                <div  className="buttonCenter">
                    <button type="submit" onClick={this.login}
                            className="btn btn-default ">登陆</button>
                </div>

            </div>

        )
    }
});


var Register = React.createClass({
    commit: function () {
        const username = $('#user').val();
        const password = $('#password').val();
        $.ajax({
            url: '/register',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({"name": username, "pwd": password}),
            success: function (data, status) {
                if (status == 'success') {
                    if(data='1'){
                        alert('注册成功');
                    }
                }
            },
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
                                id="user" placeholder="请输入用户名"/>
                </div>

                <div >
                    密码: <input type="password" className="form-control"
                               id="password" placeholder="请输入密码"/>
                </div>
                <div >
                    再次确认密码: <input type="password" className="form-control"
                                   id="repeatPassword"
                                   placeholder="请再次确认密码"/>
                </div>
                <hr/>
                <div  className="buttonCenter">
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