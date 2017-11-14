"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const print_1 = require("./print");
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = print_1.default;
    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());
let toto = "test";
let tata = 2;
function add(a, b) {
    return a + b;
}
let c = add(toto, tata);
console.log(c);
//# sourceMappingURL=index.js.map