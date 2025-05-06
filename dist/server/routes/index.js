"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    return res.send("olá dev!");
});
router.post('/teste', (req, res) => {
    console.log(req.body.teste);
    return res.status(http_status_codes_1.StatusCodes.ACCEPTED).send("testando");
});
exports.default = router;
