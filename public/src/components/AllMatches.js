import React from "react";

const AllMatches = React.createClass({

    getInitialState:function () {
        return {
            clothes:[]
        }
    },

    componentDidMount: function () {
        $.get('/AllMatches').then(data => {
            this.setState({clothes:data});
        });
    },

    getAllMatches:function () {

        const allMach = this.state.clothes[0].clothes;
        const show = [];
        allMach.map((cloth)=> {
            if (cloth.sort === 1) {
                cloth.maches.map((item)=> {
                    show.push({up: cloth.image, down: item});
                })
            }
            else if (cloth.sort === 3) {
                cloth.maches.map((item)=> {
                    show.push({up: cloth.image, down: item});
                })
            }
        });
        const showAll = [];
        show.map((cloth)=> {
            const a = allMach.find(i=>i.c_is === cloth.down);
            if (a) {
                showAll.push({up: cloth.up, down: a.image})
            }
            else {
                showAll.push({up: cloth.up, down: cloth.down})
            }
        });

        return showAll;
    },

    getStyle:function (cloth,index) {
      return <div className="totalTop">
          <form key={index} className="col-sm-6 col-md-3 ">
              <div ><img className="img-thumbnail photoTop" src={cloth.up}
                         alt="通用的占位符缩略图"/>
              </div>
              <div ><img className="img-thumbnail photoBottom" src={cloth.down}
                         alt="通用的占位符缩略图"/>
              </div>
          </form>
      </div>
    },

    render: function () {
        const allMatches=this.getAllMatches().map((cloth,index)=>{
            return this.getStyle(cloth,index);
        });
      return <div className="container  top  wrap-colthes matchesbackground" >
          {allMatches}
      </div>
    }
});

export default AllMatches;
