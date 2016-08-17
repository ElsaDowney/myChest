import React from "react";
import request from "superagent";

const AddList = React.createClass({
    getInitialState: function () {
        return {
            preC_id:0,
            c_id: 0,
            season: "",
            style: "",
            sort: "",
            image: "",
            colors: [],
            matches: []
        }
    },
    componentDidMount: function () {
        const userName = this.props.name;

        $.get("/clothes/" + userName).then(data => {
            let clo_list = data;
            console.log(data);
            if (clo_list.length !== 0) {
                var preC_id = parseInt(clo_list[clo_list.length - 1].c_id);
                console.log(preC_id);
                this.setState({preC_id: preC_id});
            }
        });

    },
    onSeason: function (item) {
        this.setState({season: item});
    },
    onColor: function (item) {
        const colors = this.state.colors;
        colors.push(item);
        this.setState({colors});
    },
    onStyle: function (item) {
        this.setState({style: item});

    },
    onSort: function (item) {
        this.setState({sort: item});
    },
    onAddImage: function (item) {
        this.setState({image: item});
    },
    setC_id:function (item) {
        this.setState({c_id: item},function () {
            console.log('我是最终的c_id');
        });
    },
    saveAdd: function (e) {
        e.preventDefault();

        $.ajax({
            url: '/addList',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                "userName": this.props.name,
                "c_id": this.state.c_id,
                "season": this.state.season,
                "style": this.state.style,
                "sort": this.state.sort,
                "image": this.state.image,
                "colors": this.state.colors,
                "matches": this.state.matches
            }),

            success: function (data, status) {
                if (status == 'success') {
                    alert('添加衣物成功');
                }
            }
        });
    },
    render: function () {
        return (
            <div className="wrap-colthes">
                <div className="row">
                    <form id="add-clothes" className="col-md-8 col-md-offset-2">
                        <div className="form-group">
                            <Season onSeason={this.onSeason}/>
                        </div>
                        <div className="form-group">
                            <Color onColor={this.onColor}/>
                        </div>
                        <div className="form-group">
                            <Style onStyle={this.onStyle}/>
                        </div>
                        <div className="form-group">
                            <Sort onSort={this.onSort}/>
                        </div>

                        <div><ImageUpload onAddImage={this.onAddImage}
                                          preC_id={this.state.preC_id}
                                          setC_id={this.setC_id}/></div>
                        <input onClick={this.saveAdd} type="button" value="保存" className="btn btn-primary"/>

                    </form>
                </div>
            </div>
        )
    }
});

const ImageUpload = React.createClass({
    render: function () {
        return <div>
            <form onSubmit={this.onSubmit} className="form-group">
                <label for="uploadFile">上传宝贝：</label>
                <input id="uploadFile" type="file" onChange={this.onFileSelect} name="image" className="form-control"/>
                <span className="input-group-btn">
                    
                    <input type="submit" value="确定上传" className="btn btn-primary btn-sm"/>
                </span>
            </form>
        </div>
    },

    getInitialState: function () {
        return {};
    },

    onFileSelect: function (e) {
        this.setState({image: e.target.files[0]});
        console.log(e.target.files[0]);
    },

    onSubmit: function (e) {
        var c_id = this.props.preC_id +1;
        this.props.setC_id(c_id);

        request.put("/upload")
            .attach("image-file", this.state.image, c_id.toString())
            .end((err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    const imageItem = res.text;
                    console.log('return:::::::' + imageItem);
                    this.props.onAddImage(imageItem)
                }
            });
        e.preventDefault();
    }
});

const Sort = React.createClass({

    selectSort: function (e) {
        console.log(e.target.value);
        this.props.onSort(e.target.value);
    },

    render: function () {
        return (
            <div>
                <label for="seleteSort">选择类别：</label>
                <select id="seleteSrt" onChange={this.selectSort} className="form-control">
                    <option value="coat">上衣</option>
                    <option value="pants">裤子</option>
                </select>
            </div>
        )
    }
});

const Style = React.createClass({

    selectStyle: function (e) {
        this.props.onStyle(e.target.value);
    },

    render: function () {
        return (
            <div>
                <label for="selectStyle">选择风格：</label>
                <select id="selectStyle" multiple="multiple" onChange={this.selectStyle} className="form-control">
                    <option value="小清新">小清新</option>
                    <option value="森女风">森女风</option>
                    <option value="欧美风">欧美风</option>
                    <option value="淑女风">淑女风</option>
                </select>
            </div>
        )
    }

});

const Color = React.createClass({
    selectColor: function (e) {
        this.props.onColor(e.target.value);
    },

    render: function () {
        return (
            <div>
                <label for="selectColor">选择颜色：</label>
                <select id="selectColor" multiple="multiple" onChange={this.selectColor} className="form-control">
                    <option value="红色">红色</option>
                    <option value="黑色">黑色</option>
                    <option value="黄色">黄色</option>
                    <option value="蓝色">蓝色</option>
                    <option value="绿色">绿色</option>
                    <option value="灰色">灰色</option>
                    <option value="紫色">紫色</option>
                </select>
            </div>
        )
    }
});

const Season = React.createClass({
    selectSeason: function (e) {
        const seasonItem = e.target.value;
        this.props.onSeason(seasonItem);
    },

    render: function () {
        return (
            <div>
                <label for="selectReason">选择季节：</label>
                <select id="selectReason" name="select-reason" onChange={this.selectSeason} className="form-control">
                    <option value="spring">春</option>
                    <option value="summer">夏</option>
                    <option value="autumn">秋</option>
                    <option value="winter">冬</option>
                </select>
            </div>
        )
    }
});

export default AddList;


