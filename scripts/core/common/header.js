/** @jsx React.DOM */

var React = require('React');

var Banner = React.createClass({
  render: function() {
    return (
      <header>
        <img src="./core/images/onboard-logo.png" />
      </header>
    );
  }
});

module.exports = Banner;