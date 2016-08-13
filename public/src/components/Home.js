import React, {Component} from "react";

class Home extends Component {

    render() {
        // $(function () {
        //     $('#myCarousel0').carousel('cycle');
        //     $('#myCarousel1').carousel('cycle');
        // });
        return (
            <div>
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
                                    <p>There are always going to be people that are better than you, so stop comparing
                                        yourself to others, and be the best you can be!</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img className="second-slide" src="images/ydd22.jpg" alt="Second slide"/>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Better You</h1>
                                    <p>Someone is nice to you because you treat them well while others are nice to you
                                        because they know your kindness..</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img className="third-slide" src="images/ydd23.jpg" alt="Third slide"/>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Fine Woman</h1>
                                    <p>The best color in the whole world, is the one that looks good, on you.
                                        Life is like a cup of tea. It won’t be bitter for a lifetime but for a short
                                        while anyway.</p>
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
                        <h2 className="featurette-heading">Why Use. <span
                            className="text-muted">It'll blow your mind.</span>
                        </h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                            porta
                            felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce
                            dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-responsive center-block img-thumbnail"
                             src="images/ydd13.jpg"
                             alt="Generic placeholder image"/>
                    </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7 col-md-push-5">
                        <h2 className="featurette-heading">How Use. <span
                            className="text-muted">See for yourself.</span>
                        </h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                            porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5 col-md-pull-7">
                        <img className="featurette-image img-responsive center-block img-thumbnail"
                             src="images/ydd4.jpg"
                             alt="Generic placeholder image"/>
                    </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Occurs Reason. <span
                            className="text-muted">Discover your beauty</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                            porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-responsive center-block img-thumbnail"
                             src="images/ydd6.jpg" alt="Generic placeholder image"/>
                    </div>
                </div>
            </div>
        )
    }
}
module.exports = Home;
