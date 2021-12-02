import { BrowserRouter, Route, Switch } from "react-router-dom"
import Posts from "./pages/Posts"
import HomePage from "./pages/HomePage"
import React from 'react'
import Register from "./pages/Register"
import AddPost from "./pages/AddPost"
import LogIn from "./pages/LogIn"
import ProfilePage from "./pages/ProfilePage"
import Empty from "./pages/Empty"

function App() {

  return (

    <BrowserRouter>
      
      <Switch>

        <Route exact path="/" component={HomePage}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/addpost" component={AddPost}/>
        <Route exact path="/login" component={LogIn}/>
        <Route exact path="/profilepage" component={ProfilePage}/>
        <Route exact path="/*" component={Empty}/>

      </Switch>

    </BrowserRouter>
  )

}

export default App