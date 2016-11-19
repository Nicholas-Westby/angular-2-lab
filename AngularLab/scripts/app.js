var uuid = require("uuid");

return function(data, callback) {
    var returnMessage = "Hello, " + data + ", I'm running from Node.js " + process.version + ". " +
        "Generated GUID: " + uuid.v4();
    callback(null, returnMessage);
};