'use strict';
(function(){
  const React = require('react');
  const ReactRouter = require('react-router');
  const routes = require('./routes');
  var ReactDOM = require( 'react-dom' );
  var Link = require( 'react-router' ).Link;
  var browserHistory = ReactRouter.browserHistory;
  ReactDOM.render( routes( browserHistory), document.getElementById( 'app' ) ) }
)()