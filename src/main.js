// We are deliberately not using "use strict" here because we need to define some global variables
// like $ and jQuery -- this would cause a lint error that you can ignore.
// We will implement below a workaround by putting all our code below, except the global defintions,
// in an "IFFY" (Immiediatel-Invoked Function Expression) and put "use strict" within it -- no more lint error!

$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

(function(win) {
    "use strict";

    var App = React.createClass({
        render: function() {
            var Child;
    
            switch(this.props.route) {
                case 'about': Child = About; break;
                default: Child = Home;
            }
    
            return (
                <div>
                    <Child />
                </div>
            );
        }
    });
    
    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }
    
    win.addEventListener('hashchange', render);
    render();
    
})(window);