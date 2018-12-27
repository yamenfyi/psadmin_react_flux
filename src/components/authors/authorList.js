"use strict";

var React = require('react');

var AuthorList = React.createClass({
    propTypes: {
        // This says that "authors" prop is an array and is required
        // Note that prop validation does NOT run in the minified (prod) React
        authors: React.PropTypes.array.isRequired
    },

    render: function() {
        var createAuthorRow = function(author) {
            return (
                // React needs an ID for each element
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>    
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;