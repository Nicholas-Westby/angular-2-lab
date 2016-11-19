function generateMessage(data, callback) {
    var guidGenerator = angularLabGlobal.guidGenerator;
    var returnMessage = "Hello, " + data + ", I'm running from Node.js " + process.version + ". " +
        "Generated GUID: " + guidGenerator.v4();
    callback(null, returnMessage);
}