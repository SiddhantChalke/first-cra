import React from 'react'
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Aboutus from './Aboutus';

function App() {
  return (
    <Router>
      <div className="App">
                <Navbar/>
                <div className="content">
                  <Switch>
                      <Route exact path='/'>
                        <Home />
                      </Route>
                      <Route path='/create'>
                        <Create />
                      </Route>
                      <Route path='/blogs/:id'>
                        <BlogDetails />
                      </Route>
                      {/* <Route path='/about'>
                        <Aboutus title='card-title' imgUrl="drawbnw.jpg" body='this is the body of card.' />
                      </Route> */}
                      <Route path='*'>
                        {/* Asterik means any other page  */}
                        <NotFound />
                      </Route>
                  </Switch>
                </div>
      </div>
    </Router>
  );
}

export default App;
