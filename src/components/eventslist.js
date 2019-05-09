import React from 'react';
import Event from './event';
import Window from "./window";
// import Pager from './pager';
import {Router, Route, Switch, Link, BrowserRouter, Redirect, hashHistory } from "react-router-dom";

class EventsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            eventsList:
                [{"city": "Kiev", "price": "0", "date": "01.01", "name": "Event"},
                    {"city": "London", "price": "0", "date": "01.02", "name": "Event"},
                    {"city": "Moscow", "price": "1", "date": "01.03", "name": "Event"},
                    {"city": "Paris", "price": "2", "date": "01.04", "name": "Event"},
                    {"city": "Lviv", "price": "3", "date": "01.05", "name": "Event"},
                    {"city": "Bila Tserkva", "price": "4", "date": "01.06", "name": "Event"}]
        }

    }

    render() {
        return(
            <div>
                <div className="results grid">
                    {  this.state.eventsList.map( (event) => {
                    return(
                    <div>
                    <Event obj={event}/>

                    </div>)

                    })
                }
                </div>
                <Route exact path="/modalWindow" render={() =><Window />} />
                {/*<Pager/>*/}
            </div>
        );


    }


}


export default EventsList;