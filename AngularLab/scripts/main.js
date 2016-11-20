function generateMessage(data, callback) {
    var guidGenerator = angularLabGlobal.guidGenerator;
    var someValue = calculateSomething(1, 2);
    var returnMessage = "Hello, " + data + ", I'm running from Node.js " + process.version + ". " +
        "Generated GUID: " + guidGenerator.v4() + ". " +
        "Value from TypeScript function: " + someValue.toString() + ".";
    callback(null, returnMessage);
}