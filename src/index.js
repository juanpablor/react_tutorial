/* @jsx React.DOM */

var Banner = require('./elements/commons/header.js');
var React = require('React');
var SiteBoilerPlate = require('./core/SiteBoilerPlate.js');
var loginForm = require('./pages/login.js');
var footerArea = require('./elements/commons/footer.js');

var index = React.createClass({
  render: function() {
    return (
      <SiteBoilerPlate>
        <Banner bannerMessage="Huxley"/>
        <loginForm />
        <footerArea />
      </SiteBoilerPlate>
    );
  }
});

module.exports = index;
