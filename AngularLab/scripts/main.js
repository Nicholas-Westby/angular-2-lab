return function(data, callback) {
    var guidGenerator = require("uuid");
    var returnMessage = "Hello, " + data + ", I'm running from Node.js " + process.version + ". " +
        "Generated GUID: " + guidGenerator.v4();
    callback(null, returnMessage);
};