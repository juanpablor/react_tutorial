/** @jsx React.DOM */

var React = require('React');
var SiteBoilerPlate = require('./core/SiteBoilerPlate.js');
var Menu = require('./core/common/menu.js');
var Container = require('./core/common/container.js');



var dashboard = React.createClass({
  render: function() {
    return (
      <SiteBoilerPlate>
      	<Menu />
      	<Container />
      </SiteBoilerPlate>
    );
  }
});

module.exports = dashboard;