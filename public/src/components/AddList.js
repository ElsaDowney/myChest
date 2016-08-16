import React from "react";
import request from "superagent";

const AddList = React.createClass({
    getInitialState: function () {
        return {
            c_id: 0,
            season: "",
            style: "",
            sort: "",
            image: "",
            colors: [],
            matches: []
        }
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
        this.setState({sort: item}, function () {
            console.log(this.state.style);
        });
    },
    saveAdd: function (e) {
        e.preventDefault();
        const c_id = this.state.c_id;
        this.setState({c_id: c_id + 1}, function () {
            console.log(this.state.c_id);
        });
        $.ajax({
            url: '/addList',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                "c_id": this.state.c_id,
                "season": this.state.season,
                "style": this.state.style,
                "sort": this.state.sort,
                "image": this.state.image,
                "colors": this.state.colors,
                "matches": this.state.matches
            }),
            // data:this.state,
            success: function (data, status) {
                if (status == 'success') {
                    alert('添加衣物成功');
                }
            }
        });
    },
    onAddImage: function (image) {
        this.setState({image: image})
    },
    render: function () {
        return (
            <div className="wrap-colthes">
                <form id="add-clothes">
                    <div><Season onSeason={this.onSeason}/></div>
                    <div><Color onColor={this.onColor}/></div>
                    <div><Style onStyle={this.onStyle}/></div>
                    <div><Sort onSort={this.onSort}/></div>
                    <ImageUpload onAddImage={this.onAddImage}/>
                    <input onClick={this.saveAdd} type="button" value="保存"/>
                </form>
            </div>
        )
    }
});

const ImageUpload = React.createClass({
    render: function () {
        return <div>
            <form onSubmit={this.onSubmit}>
                <input type="file" onChange={this.onFileSelect}/>
                <input type="submit" value="上传"/>
            </form>
        </div>
    },

    getInitialState: function () {
        return {};
    },

    onFileSelect: function (e) {
        this.setState({image: e.target.files[0]});
    },

    onSubmit: function (e) {
        request.put("/upload")
            .attach("image-file", this.state.image, this.state.image.name)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res);
                }
            });
        e.preventDefault();
    }
});

const Sort = React.createClass({

    selectSort: function (e) {
        this.props.onSort(e.target.value);
    },

    render: function () {
        return (
            <div>
                <select onChange={this.selectSort}>
                    <option value="上衣">上衣</option>
                    <option value="裤子">裤子</option>
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
                <select multiple="multiple" onChange={this.selectStyle}>
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
                <select multiple="multiple" onChange={this.selectColor}>
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
                <select name="select-reason" onChange={this.selectSeason}>
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


