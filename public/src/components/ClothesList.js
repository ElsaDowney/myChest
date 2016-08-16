import React, {Component} from "react";
import {browserHistory} from 'react-router';
const Link = require('react-router').Link;

class ClothesList extends Component{
  constructor(){
    super();
    this.state={
      allColthes:[]
    };
  }

  componentDidMount(){
  const array = [
    {_id:1,
      userName:"xiaopangzhu",
      password:"123456",
      clo_list:[
        {c_id:0,season:"summer",color:"red",sort:"coat",style:"fashion",image:"0",matches:[]},
        {c_id:1,season:"summer",color:"yellow",sort:"coat",style:"fashion",image:"1",matches:[]},
        {c_id:2,season:"summer",color:"blue",sort:"coat",style:"simple",image:"2",matches:[]},
        {c_id:3,season:"summer",color:"white",sort:"pants",style:"simple",image:"3",matches:[]},
        {c_id:4,season:"summer",color:"white",sort:"pants",style:"simple",image:"4",matches:[]},
        {c_id:5,season:"summer",color:"white",sort:"pants",style:"simple",image:"5",matches:[]},
        {c_id:6,season:"summer",color:"white",sort:"pants",style:"simple",image:"6",matches:[]},
        {c_id:7,season:"summer",color:"white",sort:"pants",style:"simple",image:"7",matches:[]},
        {c_id:8,season:"summer",color:"white",sort:"pants",style:"simple",image:"8",matches:[]},
      ]
    },
    {_id:0,
      userName:"xiaopangzhu",
      password:"123456",
      clo_list:[
        {c_id:0,season:"summer",color:"red",sort:"coat",style:"fashion",image:"0",matches:[]},
        {c_id:1,season:"summer",color:"yellow",sort:"coat",style:"fashion",image:"1",matches:[]},
        {c_id:2,season:"summer",color:"blue",sort:"pants",style:"simple",image:"2",matches:[]},
        {c_id:3,season:"summer",color:"white",sort:"pants",style:"simple",image:"3",matches:[]}
      ]
    }
  ];
    $.ajax({
      type:"POST",
      url:"/clothes",
      contentType:"application/json",
      data:JSON.stringify(array),
      success:function(data){}
    });

    const _id = 1;
    $.get("/clothes/"+_id,function(data) {
      this.setState({allColthes:data});
    }.bind(this)
  );
  }

  findClothesType(type,clothes){
    return  clothes.find(item => item.sort === type);
   }

  remove(section){
    const c_id = section.c_id;
    const allColthes = this.state.allColthes;
    const index = allColthes.indexOf(allColthes.find(item => item.c_id === c_id));
    allColthes.splice(index,1);
    this.setState({allColthes});

    const _id = 1;
    $.ajax({
      type:"DELETE",
      url:"/clothes",
      contentType:"application/json",
      data:JSON.stringify({_id,c_id}),
      success:function(data){
        alert("删除成功!");
      }
    });

  }
                                        　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
  setStyle(id){
    $("#id").css.display = "inline";
  }

  mouseOver(){
    $('.a').mouseover(function(){
      $(this).next().css("opacity",0.7);
    });
    $('.delete-wrap').mouseover(function(){
      $(this).css("opacity",0.7);
    });
  }

  mouseOut(){
    $('.a').mouseout(function(){
      $(this).next().css("opacity",0);
    });
  }
  addWrap(){
    $("input:checked").parent().siblings(".img-wrap").css("display","inline");
    $("input:not(:checked)").parent().siblings(".img-wrap").css("display","none");
  }

  getAllSectionWithTig(clothes){
    const sectionClothes = clothes.allSections.map(section => {
      const imgUrl = `../../images/image${section.image}.png`;
      return (
        <div className="imgSize">
          <div className="img-wrap"></div>
          <img className="a" src={imgUrl}
                 onMouseOver={this.mouseOver}
                 onMouseOut={this.mouseOut}/>
          <div className="delete-wrap">
            <span className="glyphicon glyphicon-trash delete"
              onClick={this.remove.bind(this,section)}>
            </span>
          </div>
          <div className="select">
            <input type="radio" name={section.sort} className="input-select"
                    value={section.c_id}
                   onClick={this.addWrap}/>
          </div>
        </div>
      )
    });
    return (
      <div>
        <span className="title-inline text-success">{clothes.sort}</span>
        <Link to="AddList">
          <button className="button button-action button-circle btn-add">
            <i className="fa fa-plus">
            </i>
          </button>
        </Link>
        <hr />
        {sectionClothes}
        <hr />
      </div>
    )
  }

  matchClothes(){
    $(".input-select").css("display","inline");
    $(".btn-float").css("display","inline");
  }

  confirmMatch(){
    const matches = [];
    $("input:checked").each(function(){
      matches.push($(this).val())
    });

    const _id = 1;
   $.ajax({
     type:"POST",
     url:"/clothes/matches",
     contentType:"application/json",
     data:JSON.stringify({_id,matches}),
     success:function(data){
       alert("搭配衣服成功");
       browserHistory.push('/AllMatches');
     }
   })

  }

  render(){
    const allColthes = this.state.allColthes;
    const clothesWithClass = [];
    for(let clothes of allColthes){
        const element = this.findClothesType(clothes.sort,clothesWithClass);
        if (element) {
          element.allSections.push(clothes)
        }else {
          const clothesObj = {};
          const arr = [];
          arr.push(clothes);
          clothesObj.sort =clothes.sort;
          clothesObj.allSections = arr;
          clothesWithClass.push(clothesObj);
        }
      }
      const clothes = clothesWithClass.map(clothes => {
        return this.getAllSectionWithTig(clothes);
      });
      return (
        <div className="wrap-colthes">
          {clothes}
          <button className="btn-match btn btn-primary" onClick={this.matchClothes}>搭配</button>
          <button className="btn-float btn btn-info" onClick={this.confirmMatch}>确认搭配</button>
          <p className="btn-foot"><button className="btn btn-info" disabled="disabled">点击添加类型</button></p>
        </div>
      )
  }
}

export default ClothesList;
