const  React = require('react');
const ReactBootstrap = require('react-bootstrap');
const Grid = ReactBootstrap.Grid;
const Row = ReactBootstrap.Row;
const Col = ReactBootstrap.Col;
const Button = ReactBootstrap.Button;
var Link = require('react-router').Link;

class Welcome extends React.Component {
  
  static get propTypes() {
  }
  
  render() {
    return (
      <div id="welcome-page">
        <h1> Random Welcome Page</h1> 
        <div id="welcome-grid">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}> 
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus sapien lobortis, dignissim nunc sed, dictum purus. Ut malesuada auctor gravida. Nam ut elit nibh. Duis id aliquam orci. Quisque mollis feugiat neque scelerisque tempor. Fusce ut sollicitudin neque. Integer non massa eros. In rhoncus porttitor neque, id rhoncus elit imperdiet sed. Duis tellus urna, accumsan sed blandit eget, maximus sit amet lorem. Suspendisse lectus leo, luctus nec mollis in, volutpat vel velit. Phasellus cursus lorem et nisi ultrices porta. Pellentesque ac augue eget justo rutrum auctor. Integer venenatis suscipit felis, sollicitudin pulvinar ipsum sodales nec. Proin et neque ut lectus eleifend tristique. Ut ut mauris eu nisi mollis lobortis. Pellentesque in maximus mi, id consequat turpis.
                </p>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={4}>
               <Link to="/page1">
                  <div className= "auth-button">
                    Page One
                  </div>
                </Link>
              </Col>
              <Col xs={12} md={4}>
               <Link to="/Page2">
                  <div className= "auth-button">
                    Page Two
                  </div>
                </Link>
              </Col>
              <Col xs={12} md={4}>
               <Link to="/page3">
                  <div className= "auth-button">
                    Page three
                  </div>
                </Link>
              </Col>
            </Row>
          </Grid>
        </div>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Welcome;