
import './App.css';
import React, { useEffect, useState } from 'react'
import Home from './components/Home';
import About from './components/about';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details';

const axios = require('axios').default;


function App() {

  // var movies = [];
  // movies.push(<Moviecard/>);
  const [data, setData] = useState([]);

    useEffect(() => {

        const fetchdata = async () => {
            const data1 = await axios.get("https://api.tvmaze.com/search/shows?q=all");
            // console.log(data1);
            setData(data1.data);
            // console.log(data1.data);
            // console.log(data1.data[1].show.name);
        }
        fetchdata();
    }, []);
  return (
    <div className="App container">
      <Router>
        <div className = "container-md">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <Link className="navbar-brand" to="/">Movie Reviews</Link>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Link">Link</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact = {true}>
            <Home data = {data}/>
          </Route>
          <Route path="/about" exact = {true}>
            <About/>
          </Route>
          <Route path="/viewdetails/:id" exact = {true}>
              <Details data = {data}/>
            </Route>
          <Route>
            Error
          </Route>
        </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
