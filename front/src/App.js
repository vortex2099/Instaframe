import React, { useEffect, createContext, useReducer, useContext } from 'react'
import './App.css';
import NavBar from './components/Navbar'
import Signin from './components/screens/SignIn'
import Signup from './components/screens/SignUp'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import CreatePost from './components/screens/CreatePost'
import { reducer, initialState } from './reducers/userReducer'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
export const UserContext = createContext()


const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    
    const user = localStorage.getItem("user")
    if (user) {
      dispatch({ type: "USER", payload: user })
    } else {
      if (!history.location.pathname.startsWith('/reset'))
        history.push('/signin')
    }
  }, [])
  return (
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>


    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />

      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App; 
