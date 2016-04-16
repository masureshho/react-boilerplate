'use strict';

const React = require( 'react' );
const ReactRouter = require( 'react-router' );
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute

const PageThree = require('./view-components/pages/page-three')
// const settingPage = require('./view-components/pages/main/setting')
const PageOne = require('./view-components/pages/page-one')
const PageTwo = require('./view-components/pages/page-two')
const welcomePage = require('./view-components/pages/welcome')
const App = require('./view-components/App')

var useScroll = require('scroll-behavior/lib/useScrollToTop');
var createBrowserHistory = require( 'react-router' ).browserHistory;

module.exports = function( history){
  var isServer = ( typeof window === 'undefined' );
  var _history
  return (
    <Router history= {history} >
      <Route component={App} path="/">
        <IndexRoute component={welcomePage} />
        <Route component={PageOne} path="/page1" />
        <Route component={PageTwo} path="/page2" />
        <Route component={PageThree} path="/page3" />
   	  </Route>
    </Router>
  );
};
