import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Project from './Components/projects';
import About from './Components/info';
import { Route, BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
              <BrowserRouter>
                 <Route exact path="/" component={App}/>
                 <Route path="/projets" component={Project}/>
                 <Route path="/contact" component={About}/>
              </BrowserRouter>   

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
