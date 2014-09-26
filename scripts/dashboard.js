/** @jsx React.DOM */

var React = require('React');
var SiteBoilerPlate = require('./core/SiteBoilerPlate.js');
var Menu = require('./core/common/menu.js');



var dashboard = React.createClass({
  render: function() {
    return (
      <SiteBoilerPlate>
      	<Menu />
      </SiteBoilerPlate>
    );
  }
});

module.exports = dashboard;
