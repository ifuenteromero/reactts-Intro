"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var endpoint = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(endpoint).then(function (response) {
    console.log({ response: response.data });
});
