import MovieList from './containers/MovieList/MovieList'
import MovieData from './containers/MovieData/MovieData'

import 'antd/dist/antd.css'
import './App.css'
import './Global.css'

import Profile from './containers/Profile/Profile';
import Buttons from './components/Buttons/Buttons';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';


import React, { useState } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  const [user, setUser] = useState(null);
  return (
      <BrowserRouter className="appStyle" >
        <Buttons user={user} setUser={setUser}/>
        <Switch>
          <Route path='/' exact component={MovieList} />
          <Route path='/moviedata' exact component={MovieData} />
          <Route path='/register' exact component={Register} />
          <Route path="/login" children={<Login user={user} setUser={setUser}/>} exact/>
          <Route path="/logout" children={<Logout user={user} setUser={setUser}/>} exact/>
          <Route path='/profile' exact component={Profile} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

