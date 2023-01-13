"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModule = void 0;
const common_1 = require("@nestjs/common");
const exception_module_1 = require("../../api/exception/exception.module");
const reponse_module_1 = require("../../api/response/reponse.module");
const axios_1 = require("@nestjs/axios");
const microservices_1 = require("@nestjs/microservices");
const comment_controller_1 = require("./controller/comment.controller");
const get_comment_service_1 = require("./services/get.comment.service");
const get_comment_application_1 = require("./application/get.comment.application");
let CommentModule = class CommentModule {
};
CommentModule = __decorate([
    (0, common_1.Module)({
        imports: [exception_module_1.ExceptionModule, reponse_module_1.ReponseModule, axios_1.HttpModule,
            microservices_1.ClientsModule.register([
                {
                    name: 'COMMENT_SERVICE',
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: 'comment',
                            brokers: ['kafka:9092'],
                        },
                        consumer: {
                            groupId: 'comment.service.consumer'
                        }
                    }
                },
            ]),],
        controllers: [comment_controller_1.CommentController],
        providers: [get_comment_application_1.GetcommentApplication, get_comment_service_1.GetcommentSearvice],
    })
], CommentModule);
exports.CommentModule = CommentModule;
//# sourceMappingURL=comment.module.js.map