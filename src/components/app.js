// Disabling check because we can't run strict mode because we need $/jQuery global vars.
/* eslint-disable strict */ 

$ = jQuery = require('jquery'); // eslint-disable-line strict 

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = App;