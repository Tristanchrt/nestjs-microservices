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
exports.GetPostSearvice = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let GetPostSearvice = class GetPostSearvice {
    constructor(client) {
        this.client = client;
    }
    async getById(id) {
        try {
            this.client.emit('get_posts', JSON.stringify("EOLA OELA"));
            return Promise.resolve('POST 1');
        }
        catch (e) {
            console.log('AAAAAAAAAAA');
        }
    }
    async getAll() {
        try {
            this.client.emit('post.comment.get.all.test', JSON.stringify("id"));
            return Promise.resolve('POST 2');
        }
        catch (e) {
            console.log('Error', e);
            console.log('AAAAAAAAAAA');
        }
    }
};
GetPostSearvice = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('POST_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientKafka])
], GetPostSearvice);
exports.GetPostSearvice = GetPostSearvice;
//# sourceMappingURL=get.post.service.js.map