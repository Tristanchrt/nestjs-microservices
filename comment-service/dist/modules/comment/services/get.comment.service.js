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
exports.GetcommentSearvice = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let GetcommentSearvice = class GetcommentSearvice {
    constructor(client) {
        this.client = client;
    }
    async getById(id) {
        try {
            return Promise.resolve('COMMENT 1');
        }
        catch (e) {
            console.log('AAAAAAAAAAA');
        }
    }
    async getAll() {
        try {
            this.client.emit('comment.post.create.test', JSON.stringify("id"));
            return Promise.resolve('COMMENT 2');
        }
        catch (e) {
            console.log('Error', e);
            console.log('AAAAAAAAAAA');
        }
    }
    processPayment(makePaymentDto) {
        console.log('get_titi');
        this.client
            .send('get_titi', "fdddddddddddd")
            .subscribe((user) => {
            console.log(`get_titi for user ${user} - amount: ${makePaymentDto}`);
        });
    }
    onModuleInit() {
        this.client.subscribeToResponseOf('get_titi');
    }
};
GetcommentSearvice = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('COMMENT_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientKafka])
], GetcommentSearvice);
exports.GetcommentSearvice = GetcommentSearvice;
//# sourceMappingURL=get.comment.service.js.map