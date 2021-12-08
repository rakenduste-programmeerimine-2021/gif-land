import { render,fireEvent, screen, queryByAttribute  } from '@testing-library/react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import App from './App';
import AddPost from './pages/AddPost';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import OtherProfilePage from './pages/OtherProfilePage';
import PostDetailedView from './pages/PostDetailedView';
import Empty from './pages/Empty';
import Register from './pages/Register';
import Posts from './pages/Posts';
import PostsAll from './pages/PostsAll';
import ProfilePage from './pages/ProfilePage';



test('HomepageTest', () => {

  render(<App><BrowserRouter><Switch><HomePage /></Switch></BrowserRouter></App>);

  const table = screen.queryByText(/Welcome to Gif-Land/i);

  expect(table).toBeInTheDocument();
});

test('LoginPageTest', () => {

  render(<App><BrowserRouter><Switch><LogIn /></Switch></BrowserRouter></App>);
  
  const table = screen.queryByText('Login');

  expect(table).toBeInTheDocument();
});
test('RegisterTest', () => {

  render(<App><BrowserRouter><Switch><Register /></Switch></BrowserRouter></App>);
  
  const table = screen.queryByText('Register');

  expect(table).toBeInTheDocument();
});
test('OtherProfilePageTest', () => {
  const component = <App><BrowserRouter><Switch><OtherProfilePage shouldRender /></Switch></BrowserRouter></App>
  expect(component).toBeDefined()
});
test('PostDetailedViewTest', () => {
  const component = <App><BrowserRouter><Switch><PostDetailedView shouldRender /></Switch></BrowserRouter></App>
  expect(component).toBeDefined()
});
test('EmptyTest', () => {
  const component = <App><BrowserRouter><Switch><Empty shouldRender /></Switch></BrowserRouter></App>
  expect(component).toBeDefined()
});
test('AddPostTest', () => {
  const component = <App><BrowserRouter><Switch><AddPost shouldRender /></Switch></BrowserRouter></App>
  expect(component).toBeDefined()
});
test('PostTest', () => {
  const component = <App><BrowserRouter><Switch><Posts shouldRender /></Switch></BrowserRouter></App>
  expect(component).toBeDefined()
});
test('PostAllTest', () => {
  const component = <App><BrowserRouter><Switch><PostsAll shouldRender /></Switch></BrowserRouter></App>
  expect(component).toBeDefined()
});
test('Kontrollib kas ProfilePage tekib', () => {
  const component = <App><BrowserRouter><Switch><ProfilePage shouldRender /></Switch></BrowserRouter></App>
  expect(component).toBeDefined()
})