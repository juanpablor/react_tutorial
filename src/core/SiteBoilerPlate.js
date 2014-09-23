/**
 * @jsx React.DOM
 */

var React = require('React');


var SiteBoilerPlate = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>React Page | Client-Server JavaScript Rendering</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no" />
          <link rel="stylesheet" type="text/css" href="/style.css" />
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
});

module.exports = SiteBoilerPlate;
