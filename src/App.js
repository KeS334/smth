import React from 'react';
import Header from './components/header';
import Search from './components/search';
import EventsList from './components/eventslist';

import './App.css';
class App extends React.Component{
  render() {
    return (
        <div>

           <Header />
           <Search />
            <EventsList />



        </div>

    );
  }
}

export default App;