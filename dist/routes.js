"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UrlController_1 = __importDefault(require("./controllers/UrlController"));
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    return res.render('index.html');
});
router.get('/url/shorten', UrlController_1.default.shorten);
router.get('/:id', UrlController_1.default.get);
router.get('*', function (req, res) {
    return res.status(404).render('404.html');
});
exports.default = router;
