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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const http_response_service_1 = require("../../../api/response/http-response.service");
const microservices_1 = require("@nestjs/microservices");
const get_comment_application_1 = require("../application/get.comment.application");
let CommentController = class CommentController {
    constructor(httpResponseService, getcommentApplication) {
        this.httpResponseService = httpResponseService;
        this.getcommentApplication = getcommentApplication;
    }
    handleCommentGelAll(data) {
        console.log('XXXXXXXXXXXXXXX', data);
        this.getcommentApplication.processPayment();
    }
    async findAll(request) {
        return await this.getcommentApplication.getAll();
    }
    async findOne(res, req, id) {
        return await this.getcommentApplication.getById(id);
    }
};
__decorate([
    (0, microservices_1.EventPattern)('post.comment.get.all.test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "handleCommentGelAll", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findOne", null);
CommentController = __decorate([
    (0, common_1.Controller)('comment'),
    __metadata("design:paramtypes", [http_response_service_1.HttpResponseService, get_comment_application_1.GetcommentApplication])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map