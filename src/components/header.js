import React from 'react';
import  '../img/fon0.png';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            images: ["file:///D:/University/ThirdCourse/SecondPart/Site_1_0/React/smth/src/img/img0.png",
                "file:///D:/University/ThirdCourse/SecondPart/Site_1_0/React/smth/src/img/fon0.png",
                        "../src/img/fon0.png"],
        }
    }
    render() {
        return (
            <div>
                <div className="layerHead">

                </div>
                <img src={this.state.images[0]} className="backImg"  />
            <header className="grid">
                <div className="logo">
                    <p>EF</p>
                </div>

                <div className="search_by_word"> <input type="search" placeholder="Поиск по слову"/>
                </div>
            </header>
            </div>
        );
    }
}

export default Header;