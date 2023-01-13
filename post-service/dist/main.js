"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const microservice1 = app.connectMicroservice({
        transport: microservices_1.Transport.TCP,
        options: {
            port: 3001,
        },
    });
    const microservice2 = await app.connectMicroservice({
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                brokers: ['kafka:9092'],
            },
            consumer: {
                groupId: 'post-consumer',
            },
        },
    });
    await app.startAllMicroservices();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map