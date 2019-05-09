import React from 'react';
import {Router, Route, Switch, Link, BrowserRouter, Redirect, hashHistory } from "react-router-dom";

class Event extends React.Component{
    render() {
        return (

                <Link to="/modalWindow">
                <div className="event">
                    <div className="eventCont position1">
                        <img src={this.props.obj.img} alt="Event1"/>
                        <p className="city">Город: {this.props.obj.city}</p>
                        <p className="price">Цена: {this.props.obj.price}</p>
                        <p className="date">Дата: {this.props.obj.date}</p>
                    </div>
                    <p className="ev">Событие: {this.props.obj.name}</p>
                </div>
                </Link>

        );
    }
}

export default Event;