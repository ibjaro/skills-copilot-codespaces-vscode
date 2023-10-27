// Create web server
// Usage: node comments.js

// Load modules
const http = require('http');
const fs = require('fs');
const url = require('url');

// Create server
http.createServer(function (request, response) {
    // Get path
    const path = url.parse(request.url).pathname;

    // Get parameters
    const params = url.parse(request.url, true).query;
    const name = params.name;
    const comment = params.comment;

    // Check path
    if (path === '/comment') {
        // Add comment
        addComment(name, comment, function() {
            // Create response
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('Comment added!');
            response.end();
        });
    } else {
        // Return comments
        getComments(function(comments) {
            // Create response
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(comments);
            response.end();
        });
    }
}).listen(8080);

// Get comments
function getComments(callback) {
    // Read comments
    fs.readFile('comments.txt', function(err, data) {
        // Check for errors
        if (err) {
            // Create comments
            const comments = 'No comments yet';

            // Call callback
            callback(comments);
        } else {
            // Create comments
            const comments = data;

            // Call callback
            callback(comments);
        }
    });
}

// Add comment
function addComment(name, comment, callback) {
    // Read comments
    fs.readFile('comments.txt', function(err, data) {
        // Check for errors
        if (err) {
            // Create comments
            const comments = 'No comments yet';

            // Add comment
            const newComments = comments + '\n' + name + ': ' + comment;

            // Write new comments
            fs.writeFile('comments.txt', newComments, function(err) {
                // Check for errors
                if (err) {
                    // Call callback
                    callback();
                } else {
                    // Call callback
                    callback();
                }
            });
        } else {
            // Create comments
            const comments = data;

            // Add comment
            const newComments = comments + '\n' + name + ': ' + comment;

            // Write new comments
            fs.writeFile('comments.txt', newComments, function(err) { 
                // Check for errors
                if (err) {
                    // Call callback
                    callback();
                } else {
                    // Call callback
                    callback();
                }
            } ); 
        }
    }
    );
}
