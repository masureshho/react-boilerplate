var  React = require('react');
var  RouteHandler = require('react-router').RouteHandler;


class PageOne extends React.Component {
  
  static get propTypes() {
  }
  
  render() {
  	return(<h1> Page One</h1>)
  }
}

module.exports = PageOne;