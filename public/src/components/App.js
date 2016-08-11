import React, {Component} from "react";

class App extends Component {
  render() {
    return (
        <div>
          <div className="navbar-wrapper">
            <div className="container">

              <nav className="navbar navbar-inverse navbar-static-top ">
                <div className="container">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">衣搭搭</a>
                  </div>
                  <div classID="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="#">首页</a></li>
                      <li><a href="#about">我的衣柜</a></li>
                      <li><a href="#contact">我的搭配</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="#">登陆/注册</a></li>
                    </ul>
                  </div>
                </div>
              </nav>

            </div>
          </div>


          <div classID="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img className="first-slide" src="images/ydd3.jpg" alt="First slide"/>
                <div className="container">
                  <div className="carousel-caption">
                    <h1> Beautiful You</h1>
                    <p></p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <img className="second-slide" src="images/ydd2.jpg" alt="Second slide"/>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Beautiful You</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec classIDelit
                      non mi
                      porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                      elit.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                  </div>
                </div>
              </div>
              <div className="item">
                <img className="third-slide" src="images/ydd1.jpg" alt="Third slide"/>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Beautiful You</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                      porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                      elit.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"/>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"/>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <hr className="featurette-divider"/>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span>
              </h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                porta
                felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce
                dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-responsive center-block" src="images/ydd1.jpg"
                   alt="Generic placeholder image"/>
            </div>
          </div>

          <hr className="featurette-divider"/>

          <div className="row featurette">
            <div className="col-md-7 col-md-push-5">
              <h2 className="featurette-heading">Oh yeah, it's that good. <span
                  className="text-muted">See for yourself.</span>
              </h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5 col-md-pull-7">
              <img className="featurette-image img-responsive center-block" src="images/ydd4.jpg"
                   alt="Generic placeholder image"/>
            </div>
          </div>

          <hr className="featurette-divider"/>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">And lastly, this one. <span
                  className="text-muted">Checkmate.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-responsive center-block"
                   src="images/ydd6.jpg" alt="Generic placeholder image"/>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
