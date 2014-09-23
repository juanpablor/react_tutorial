/** @jsx React.DOM */

var React = require('React');

var footerArea = React.createClass({
  render: function() {
    return (
		<footer className="footer">
			<div className="footerImage"><img src="./elements/commons/logo-signature.png" /></div>
			<div className="footerText">Crafted by Made Media | Version major.minor.patch</div>
		</footer>
    );
  }
});

module.exports = footerArea;