"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./routes"));
var ejs_1 = __importDefault(require("ejs"));
var app = (0, express_1.default)();
app.use(express_1.default.static('public'));
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('html', ejs_1.default.renderFile);
app.use(routes_1.default);
var port = process.env.PORT || '3000';
app.listen(port, function () {
    console.log("Running on http://localhost:" + port);
});
