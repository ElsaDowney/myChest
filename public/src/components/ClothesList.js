import React, {Component} from "react";

class Chest extends Component {
  render(){
    return (
      <div>
        <ClothesList />
      </div>
    )
  }
}

class ClothesList extends Component{
  constructor(){
    super();
    this.state={
      allColthes:[]
    }
  }

  componentDidMount(){
    const array = [
      {_id:0,season:"summer",color:"red",sort:"coat",style:"fashion",image:"0"},
      {_id:1,season:"summer",color:"yellow",sort:"coat",style:"fashion",image:"1"},
      {_id:2,season:"summer",color:"blue",sort:"pants",style:"simple",image:"2"},
      {_id:3,season:"summer",color:"white",sort:"pants",style:"simple",image:"3"}
      // {_id:4,season:"summer",color:"black",sort:"fishion",type:"coat",image:"4"}
  ];
    $.ajax({
      type:"POST",
      url:"/clothes",
      contentType:"application/json",
      data:JSON.stringify(array),
      success:function(data){}
    })

    $.get("/clothes",function(data) {
      this.setState({allColthes:data});
    }.bind(this)
  );
    // this.setState({allColthes:array});
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

  getAllSectionWithTig(clothes){
    const sectionClothes = clothes.allSections.map(section => {
      const imgUrl = `../../images/image${section.image}.png`;
      return (
        <div className="imgSize">
          <img src={imgUrl}/>
          <span className="glyphicon glyphicon-trash delete"
                onClick={this.remove.bind(this,section)}></span>
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
      })
      return (
        <div className="wrap-colthes">
          {clothes}
          <button className="btn-float">搭配</button>
          <p className="btn-foot"><button>点击添加类型</button></p>
        </div>
      )
  }
}

export default Chest;
