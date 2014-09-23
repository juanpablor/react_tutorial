/** @jsx React.DOM */

var React = require('React');

var Banner = React.createClass({
  render: function() {
    return (
      <header>
        <img src="./elements/commons/onboard-logo.png" />
      </header>
    );
  }
});

module.exports = Banner;