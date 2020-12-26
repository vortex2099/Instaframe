import React from 'react'
import './App.css';
import NavBar from './components/Navbar'
import Signin from './components/screens/SignIn'
import Signup from './components/screens/SignUp'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import CreatePost from './components/screens/CreatePost'
import { BrowserRouter, Route } from 'react-router-dom'



function App() {
  return (<BrowserRouter>

    <NavBar />
    <Route exact path='/'>
      <Home />
    </Route>
    <Route path='/signin'>
      <Signin />
    </Route>
    <Route path='/signup'>
      <Signup />
    </Route>
    <Route path='/profile'>
      <Profile />
    </Route>
    <Route path='/create'>
      <CreatePost />
    </Route>

  </BrowserRouter>


  );
}

export default App; 
