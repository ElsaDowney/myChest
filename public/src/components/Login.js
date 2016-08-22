var React = require('react');
import {browserHistory} from 'react-router';

var Login = React.createClass({
    login: function () {
        const username = $('#loginName').val();
        const password = $('#loginPassword').val();
        $.ajax({
            url: '/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({"name": username, "pwd": password}),

            success: function (data, status) {
                if (status === 'success') {
                    if (data === '0') {
                        alert("亲,用户不存在,请先注册哦");
                    }
                     if(data==='1'){
                        alert("嘻嘻,登陆成功啦");
                        this.props.onName(username);
                        browserHistory.push('/');
                    }
                    if(data==='2'){
                        alert("哎呀,密码不对啦,请重新登陆吧");
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

export default Login;