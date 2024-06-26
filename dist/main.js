"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const start = async () => {
    try {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Stadium finder ')
            .setDescription('Mini project stadium finder')
            .setVersion('1.0')
            .addTag('NodeJs, NestJs,Postgress, swagger, Sequalize, JWT, Bot, Sms, mailer')
            .build();
        const PORT = process.env.PORT || 3333;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api/docs', app, document);
        app.setGlobalPrefix('api');
        app.use(cookieParser());
        app.useGlobalPipes(new common_1.ValidationPipe());
        await app.listen(PORT, () => {
            console.log(`Server started at ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=main.js.map