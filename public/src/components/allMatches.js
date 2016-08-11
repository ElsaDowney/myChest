

const AllMaches = React.createClass({

    componentDidMount: function () {
        $.get('/allMatches').then(data => {
            this.setState(data);
        });
    },

    render: function () {
        const allMach = this.state.clothes;
        const show = [];
        allMach.map((cloth)=> {
            if (cloth.sort === 1) {
                cloth.maches.map((item)=> {
                    show.push({up: cloth.image, down: item});
                })
            }
            else if (cloth.sort === 3) {
                show.push({up: cloth.image, down: 0})
            }
        });
        console.log(show);
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
        console.log(showAll);
        return (
            <div>
                {showAll.map((cloth, index)=> {
                    if (cloth.down === 0) {
                        return <img width="200px" height="200px" src={cloth.up}/>
                    }
                    else {
                        return <div key={index}>
                            <p>
                                <img width="200px" height="200px" src={cloth.up} />
                                <img width="200px" height="200px" src={cloth.down}/>
                            </p>

                        </div>
                    }
                })}
            </div>
        )
    }
});

ReactDOM.render(<AllMaches name="TODOS">nice to MEET you.</AllMaches>,
    document.getElementById('content'));