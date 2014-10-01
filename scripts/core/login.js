/** @jsx React.DOM */

var React = require('React');

var loginForm = React.createClass({

  render: function() {
    return (
        <form id="loginForm" className="form-signin" role="form">
          <input type="login" ref="login" id="login" className="form-control" placeholder="Username" required="" autofocus="" />
          <input type="password" ref="password" id="password" className="form-control" placeholder="Password" required="" />

          <button className="btn btn-lg btn-primary btn-block" type="submit">LOGIN</button>
        </form>
    );
  }
});

module.exports = loginForm;