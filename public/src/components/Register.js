
var React = require('react');

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
                        if (status === 'success') {
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

export default Register;