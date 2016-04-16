
module.exports = function () {
  var express = require('express');
  var ReactDOMServer = require('react-dom/server');
  var fs = require( 'fs' );
  var Helmet = require( 'react-helmet' );
  var React = require( 'react' );
  var ReactDOMServer = require('react-dom/server');
  var routes = require('../app/routes');
  var ReactRouter = require( 'react-router' );
  var reactMatch = ReactRouter.match;
  var RoutingContext = ReactRouter.RouterContext;
  var path = require('path');

  const app = express();
  app.use( '/' + 'static', express.static( 'dist' ) );
  app.get('/favicon.ico', (req, res) => res.send(''));
  var baseDoc = fs.readFileSync( 'app/index.html', 'utf8' );
  app.all( new RegExp('\/((?!' + 'static' + ').)*'), (req, res) => {
    reactMatch( { routes: routes( undefined ), location: req.url }, function( error, redirectLocation, renderProps ){
      if ( error ){
          res.status( 500 ).send( error.message );
      } else if ( redirectLocation ){
          res.redirect( 302, redirectLocation.pathname + redirectLocation.search );
      } else if ( renderProps ){
            var content = ReactDOMServer.renderToString( <RoutingContext {...renderProps} /> );
            var head = Helmet.rewind();
            if( !head ){
                head = {
                    title: '<title>Default Title</title>',
                    meta: '',
                    link: '',
                    script: ''
                };
            } else if( head.meta ) {
                var metaTags = head.meta.toComponent();                
                if( metaTags.length ){
                  _.each( metaTags, function( item ){
                      if( item.props && item.props.name === 'el:status' && item.props.content === '404' ){
                        res.status( 404 );
                      }
                  });                      
                }
              }
            content = baseDoc
              .replace( /\{\{\{\s*title\s*\}\}\}/gi, 'Message Line' )
              .replace( /\{\{\{\s*head\s*\}\}\}/gi, head.meta + head.link )
              .replace( /\{\{\{\s*script\s*\}\}\}/gi, head.script )
              .replace( /\{\{\{\s*mainApp\s*\}\}\}/gi, content );
            res.status(200).send( content );
      } else {
          res.status( 404 ).send( 'Not found' );
      }
    });
  });

  const port = process.env.PORT || 3333;
  console.log('Server listening at ' + port);
  app.listen(port);
}
