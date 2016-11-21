"use strict";
// This is just a sample function that is being called by main.js via browserify.js
// (both in the scripts folder).
function calculateSomething(num1, num2) {
    return num1 + num2;
}
exports.calculateSomething = calculateSomething;
//TODO: Call bootstrap-server to render some markup...
var bootstrap_server_1 = require("../Client/bootstrap-server");
bootstrap_server_1.default({
    origin: "",
    url: "",
    absoluteUrl: "",
    data: {}
});
