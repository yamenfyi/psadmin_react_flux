"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

// The second optional parameter we are adding "Router.HistoryLocation" is for using
// browser history URL (localhost:9000/about) instead of hash history URL (localhost:9000/#/about).
// Note that the latter is the React default -- also has a wider browser support, but doesn't look nice!
Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});