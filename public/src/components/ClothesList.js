import React, {Component} from "react";

class ClothesList extends Component{
  constructor(){
    super();
    this.state={
      allColthes:[]
    }
  }

  componentDidMount(){
  //   const array = [
  //     {_id:0,season:"summer",color:"red",sort:"coat",style:"fashion",image:"0"},
  //     {_id:1,season:"summer",color:"yellow",sort:"coat",style:"fashion",image:"1"},
  //     {_id:2,season:"summer",color:"blue",sort:"pants",style:"simple",image:"2"},
  //     {_id:3,season:"summer",color:"white",sort:"pants",style:"simple",image:"3"}
  // ];
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
    })

    const _id = 0;
    $.get("/clothes/0",function(data) {
      this.setState({allColthes:data});
    }.bind(this)
  );
  }

  findClothesType(type,clothes){
    return  clothes.find(item => item.sort === type);
   }

  remove(section){
    const id = section._id;
    const allColthes = this.state.allColthes;
    const index = allColthes.indexOf(allColthes.find(item => item._id === id));
    allColthes.splice(index,1);
    this.setState({allColthes});
  }
                                        　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
  setStyle(id){
    $("#id").css.display = "inline";
  }

  getAllSectionWithTig(clothes){
    const sectionClothes = clothes.allSections.map(section => {
      const imgUrl = `../../images/image${section.image}.png`;
      return (
        <div className="imgSize">
          <img src={imgUrl} id="show"
              onfocus={this.setStyle.bind(this.id)}/>
          <span className="delete"
                onClick={this.remove.bind(this,section)}>X</span>
              <input type="checkbox" name="selected" className="input-select"
                    value={section._id}/>
        </div>
      )
    });
    return (
      <div>
        <h4>{clothes.sort}</h4>
        <hr />
        {sectionClothes}
        <button><span className="glyphicon glyphicon-plus"></span></button>
      </div>
    )
  }

  matchClothes(){
    $('.input-select').css("display","inline");
  }

  confirmMatch(){
    const match = [];
    $("input[name=selected]:checked").each(function(){
      match.push($(this).val())
    });
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
      // console.log(clothesWithClass);
      const clothes = clothesWithClass.map(clothes => {
        return this.getAllSectionWithTig(clothes);
      })
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
