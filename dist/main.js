"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const response_interceptor_1 = require("./interceptor/response.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.enableCors({ origin: '*' });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('SMS CRM Api')
        .setDescription('this is the api for sms CRM ')
        .setVersion('1.0')
        .addTag('sms')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor());
    await app.listen(3333);
}
bootstrap();
//# sourceMappingURL=main.js.map