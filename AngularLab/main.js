return function(data, callback) {

    const doc = `
            <!DOCTYPE html>
            <html>
                <head></head>
                <body>
                    <app></app>
                </body>
            </html>
        `;

    var generatedId = require("node-uuid").v4();
    var returnMessage = "Hello, " + data + ", I'm running from Node.js " + process.version + ". " +
        "Here's a generated GUID: " + generatedId;
    callback(null, returnMessage);
};