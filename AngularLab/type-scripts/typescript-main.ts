// This is just a sample function that is being called by main.js via browserify.js
// (both in the scripts folder).
export function calculateSomething(num1, num2) {
    return num1 + num2;
}

//TODO: Call bootstrap-server to render some markup...

import Renderer from "../Client/bootstrap-server";

Renderer({
    origin: "",
    url: "",
    absoluteUrl: "",
    data: {}
});