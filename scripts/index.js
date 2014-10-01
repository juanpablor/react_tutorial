/* @jsx React.DOM */

var React = require('React');
var SiteBoilerPlate = require('./core/SiteBoilerPlate.js');
var loginForm = require('./core/login.js');
var Banner = require('./core/common/header.js');
var footerArea = require('./core/common/footer.js');

var index = React.createClass({
  render: function() {
    return (
      <SiteBoilerPlate>
        <Banner />
        <loginForm />
        <footerArea />
      </SiteBoilerPlate>
    );
  }
});

module.exports = index;
