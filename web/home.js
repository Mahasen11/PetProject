"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
var index = function (req, res) {
    res.render("home", {
        activeHome: true,
        title: "home"
    });
}; ////Controllers
exports.index = index;
