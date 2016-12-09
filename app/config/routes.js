// React Router maps components to URLs

var React = require('react');
// installed react-router with npm
var ReactRouter = require('react-router');

// Make these objects from React Router
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');

// React-router objects behave as components.  Main component will be parent route, will render views that stay the same on every page like header, nav menu, footer. //

//Note: (), not {}
//Note: Could not load until added history property to Router 
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home}/>
    </Route>
  </Router>
);

module.exports = routes;
