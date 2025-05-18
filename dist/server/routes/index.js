"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("./../controllers");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    return res.send("olá dev!");
});
router.post('/cidades', controllers_1.CitiesController.createValidation, controllers_1.CitiesController.create);
router.get('/cidades/:id', controllers_1.CitiesController.getByIdValidation, controllers_1.CitiesController.getById);
router.get('/cidades', controllers_1.CitiesController.gettAllValidation, controllers_1.CitiesController.getAll);
router.put('/cidades/:id', controllers_1.CitiesController.updateValidation, controllers_1.CitiesController.update);
router.delete('/cidades/:id', controllers_1.CitiesController.deleteValidation, controllers_1.CitiesController.deleteById);
exports.default = router;
