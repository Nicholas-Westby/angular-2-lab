return function(data, callback) {
    var generatedId = require("node-uuid").v4();
    var returnMessage = "Hello, " + data + ", I'm running from Node.js " + process.version + ". " +
        "Here's a generated GUID: " + generatedId;
    callback(null, returnMessage);
};