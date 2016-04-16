var  React = require('react');
var  RouteHandler = require('react-router').RouteHandler;


module.exports = class App extends React.Component {  
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
