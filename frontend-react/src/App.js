import { BrowserRouter, Route, Switch } from "react-router-dom"
import Posts from "./pages/Posts"
import PostsAll from "./pages/PostsAll"
import HomePage from "./pages/HomePage"
import React from 'react'
import Register from "./pages/Register"
import AddPost from "./pages/AddPost"
import LogIn from "./pages/LogIn"
import ProfilePage from "./pages/ProfilePage"
import Empty from "./pages/Empty"
import OtherProfilePage from "./pages/OtherProfilePage"
import PostDetailedView from "./pages/PostDetailedView"

function App() {

  return (
    <BrowserRouter>
      
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/postsAll" component={PostsAll}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/addpost" component={AddPost}/>
        <Route exact path="/login" component={LogIn}/>
        <Route exact path="/profilepage" component={ProfilePage}/>
        <Route exact path="/profilepage/:profileId/:profileId2" component={OtherProfilePage}/>
        <Route exact path="/posts/:postId/" component={PostDetailedView}/>

        <Route path="/*" component={Empty}/>

      </Switch>

    </BrowserRouter>
  )

}

export default App