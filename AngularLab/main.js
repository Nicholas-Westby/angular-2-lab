return function(data, callback) {
    var returnMessage = "Hello, " + data + ", I'm running from Node.js " + process.version + ".";
    callback(null, returnMessage);
};