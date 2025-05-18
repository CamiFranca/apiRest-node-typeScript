"use strict";
// import { RequestHandler } from "express"
// import { StatusCodes } from "http-status-codes"
// import * as yup from "yup"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const http_status_codes_1 = require("http-status-codes");
const validation = (GetAllSchemas) => {
    const schemas = GetAllSchemas((schema) => schema);
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const errosResult = {};
        Object.entries(schemas).forEach(([Key, schema]) => {
            try {
                schema.validateSync(req[Key], { abortEarly: false });
            }
            catch (error) {
                const yupError = error;
                const errors = {};
                yupError.inner.forEach(error => {
                    if (error.path === undefined)
                        return;
                    errors[error.path] = error.message;
                });
                errosResult[Key] = errors;
            }
        });
        if (Object.entries(errosResult).length === 0) {
            return next();
        }
        else {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ errors: errosResult });
        }
    });
};
exports.validation = validation;
