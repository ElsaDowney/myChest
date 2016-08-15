import React, {Component} from "react";

class ClothesList extends Component{
  constructor(){
    super();
    this.state={
      allColthes:[]
    };
  }

  componentDidMount(){

  const array = [
    {_id:0,
      userName:"xiaopangzhu",
      password:"123456",
      clo_list:[
        {c_id:0,season:"summer",color:"red",sort:"coat",style:"fashion",image:"0",matches:[]},
        {c_id:1,season:"summer",color:"yellow",sort:"coat",style:"fashion",image:"1",matches:[]},
        {c_id:2,season:"summer",color:"blue",sort:"pants",style:"simple",image:"2",matches:[]},
        {c_id:3,season:"summer",color:"white",sort:"pants",style:"simple",image:"3",matches:[]}
      ]
    },
    {_id:1,
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
    $.get("/clothes/1",function(data) {
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
      success:function(data){}
    });

  }
                                        　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
  setStyle(id){
    $("#id").css.display = "inline";
  }

  mouseOver(){
    // $('.a').next().css("opacity",1);
    $('.a').mouseover(function(){
      $(this).next().css("opacity",0.5);
    });
    $('.delete-wrap').mouseover(function(){
      $(this).css("opacity",0.5)
    })
    // e.target.next().css("opacity",1);
  }

  mouseOut(){
    $('.a').mouseout(function(){
      $(this).next().css("opacity",0);
    });
    // e.target.next().css("opacity",0.5);
  }

  getAllSectionWithTig(clothes){
    const sectionClothes = clothes.allSections.map(section => {
      const imgUrl = `../../images/image${section.image}.png`;
      return (
        <div className="imgSize">
          <img className="a" src={imgUrl}
              onMouseOver={this.mouseOver}
              onMouseOut={this.mouseOut}/>
          <div className="delete-wrap">
            <span className="glyphicon glyphicon-trash delete"
              onClick={this.remove.bind(this,section)}></span>
          </div>
          <div className="select">
            <input type="radio" name={section.sort} className="input-select"
                    value={section.c_id}/>
          </div>
        </div>
      )
    });
    return (
      <div>
        <h4 className="h4-inline">{clothes.sort}</h4>
        <button className="button button-royal button-circle button-giant btn-add">
          <i className="fa fa-plus"></i></button>
        <hr />
        {sectionClothes}
      </div>
    )
  }

  matchClothes(){
    $('.input-select').css("display","inline");
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
     success:function(data){}
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
          <button className="" onClick={this.matchClothes}>搭配</button>
          <button className="btn-float" onClick={this.confirmMatch}>确认搭配</button>
          <p className="btn-foot"><button>点击添加类型</button></p>
        </div>
      )
  }
}

export default ClothesList;
