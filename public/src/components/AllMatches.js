import React from "react";
const getAllMatches=require('./matches');

const AllMatches = React.createClass({

    getInitialState:function () {
        return {
            clothes:[]
        };
    },

    componentDidMount: function () {
      const userName = this.props.name;
        $.get('/AllMatches/'+userName).then(data => {
            this.setState({clothes:data});
        });
    },

    getStyle:function (clothes,index) {
      const up = `../../images/image${clothes.up}.jpg`;
      const down = `../../images/image${clothes.down}.jpg`;

      return <div className="totalTop">
          <form key={index} className="col-sm-6 col-md-3 ">
              <div ><img className="img-thumbnail photoTop" src={up}
                         alt="通用的占位符缩略图"/>
              </div>
              <div ><img className="img-thumbnail photoBottom" src={down}
                         alt="通用的占位符缩略图"/>
              </div>
          </form>
      </div>
    },

    render: function () {
        let allMatches;
      if (getAllMatches(this.state.clothes).length === 0) {
        allMatches = <p className="font-center">还没有匹配衣服</p>;
      }else {
      allMatches=getAllMatches(this.state.clothes).map((cloth,index)=>{
          return this.getStyle(cloth,index);
      });
    }
      return <div className="container  top  wrap-colthes" >
          {allMatches}
      </div>
    }
});

export default AllMatches;
