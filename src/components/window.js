import React from 'react';
import {Router, Route, Switch, Link, BrowserRouter, Redirect, hashHistory } from "react-router-dom";

class Window extends React.Component{
    render() {
        return (

                <div className="window" style={{position: "absolute", width: "60%", height: "60%", backgroundColor: "grey",
                    borderRadius: "10px", top:"20%", right: "20%"}}>
                    {console.log('hi')}
                    <img src="images/img1.jpg" alt="Event1" />
                        <p className="ev_w">Событие</p>
                        <p className="city_w">Город</p>
                        <p className="price_w">Цена</p>
                        <p className="date_w">Дата</p>
                        <p className="inform_w"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="button">
                            <button>Go to site</button>
                        </div>
                        <div    className="button">
                            <Link to="/"><button>Close</button></Link>
                        </div>


                </div>

        );
    }
}

export default Window;




