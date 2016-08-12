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
    render: function () {
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

        return (
            <div className="container  top ">
                {showAll.map((cloth, index)=> {
                    return <form key={index} className="col-sm-6 col-md-3 fm">
                        <div ><img className="img-thumbnail" src={cloth.up}
                                   alt="通用的占位符缩略图"/>
                        </div>
                        <div ><img className="img-thumbnail" src={cloth.down}
                                   alt="通用的占位符缩略图"/>
                        </div>
                    </form>

                })}

            </div>
        )
    }
});

export default AllMatches;