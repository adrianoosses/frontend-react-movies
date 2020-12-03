import MovieList from './containers/MovieList/MovieList'
import MovieData from './containers/MovieData/MovieData'
import Header from './components/Header/Header'
import './App.css'
import './Global.css'

import Profile from './containers/Profile/Profile';
import Buttons from './components/Buttons/Buttons';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login'


import React, { useState } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  const [user, setUser] = useState(null);
  return (
      <BrowserRouter className="appStyle">
      <Header/>
      <Buttons />
      <Switch>
        <Route path='/' exact component={MovieList} />
        <Route path='/moviedata' exact component={MovieData} />
        <Route path='/register' exact component={Register} />
        <Route path="/login" children={<Login user={user} setUser={setUser}/>} exact/>
        <Route path='/profile' exact component={Profile} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

