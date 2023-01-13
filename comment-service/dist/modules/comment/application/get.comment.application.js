"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetcommentApplication = void 0;
const common_1 = require("@nestjs/common");
const http_exception_service_1 = require("../../../api/exception/http-exception.service");
const get_comment_service_1 = require("../services/get.comment.service");
let GetcommentApplication = class GetcommentApplication {
    constructor(httpExceptionService, getcommentSearvice) {
        this.httpExceptionService = httpExceptionService;
        this.getcommentSearvice = getcommentSearvice;
    }
    async getById(id) {
        try {
            const search = await this.getcommentSearvice.getById(id);
            if (!search)
                this.httpExceptionService.notFoundException("Id not found on seach object");
            return search;
        }
        catch (e) {
            return this.httpExceptionService.badRequestException(e);
        }
    }
    async getAll() {
        try {
            const search = await this.getcommentSearvice.getAll();
            if (!search)
                this.httpExceptionService.notFoundException("Id not found on seach object");
            return search;
        }
        catch (e) {
            return this.httpExceptionService.badRequestException(e);
        }
    }
    processPayment() {
        try {
            this.getcommentSearvice.processPayment("PAYMENT");
        }
        catch (e) {
            return this.httpExceptionService.badRequestException(e);
        }
    }
};
GetcommentApplication = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [http_exception_service_1.HttpExceptionService, get_comment_service_1.GetcommentSearvice])
], GetcommentApplication);
exports.GetcommentApplication = GetcommentApplication;
//# sourceMappingURL=get.comment.application.js.map