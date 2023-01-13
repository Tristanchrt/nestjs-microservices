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
exports.GetPostApplication = void 0;
const common_1 = require("@nestjs/common");
const http_exception_service_1 = require("../../../api/exception/http-exception.service");
const get_post_service_1 = require("../services/get.post.service");
let GetPostApplication = class GetPostApplication {
    constructor(httpExceptionService, getPostSearvice) {
        this.httpExceptionService = httpExceptionService;
        this.getPostSearvice = getPostSearvice;
    }
    async getById(id) {
        try {
            const search = await this.getPostSearvice.getById(id);
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
            const search = await this.getPostSearvice.getAll();
            if (!search)
                this.httpExceptionService.notFoundException("Id not found on seach object");
            return search;
        }
        catch (e) {
            return this.httpExceptionService.badRequestException(e);
        }
    }
};
GetPostApplication = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [http_exception_service_1.HttpExceptionService, get_post_service_1.GetPostSearvice])
], GetPostApplication);
exports.GetPostApplication = GetPostApplication;
//# sourceMappingURL=get.post.application.js.map