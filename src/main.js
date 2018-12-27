"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

// A second optional parameter we could add is "Router.HistoryLocation" which is for using
// browser history URL (localhost:9000/about) instead of hash history URL (localhost:9000/#/about).
// Note that the latter is the React default -- also has a wider browser support, but doesn't look nice!
Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});