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
          <title></title>
          <link rel="stylesheet" href="./core/common/css/style.css" />
          <link rel="stylesheet" href="./core/common/css/menu.css" />
          {
          //<!-- <link rel="stylesheet" href="./core/common/css/page.css" />}
          }
          <link rel="stylesheet" href="./core/common/tile1x1number/tile_1x1_number.css" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no" />
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
});

module.exports = SiteBoilerPlate;
