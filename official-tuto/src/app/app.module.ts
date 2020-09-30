import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  	imports: [CatsModule],
  	controllers: [AppController],
  	providers: [AppService],
})
export class AppModule implements NestModule {
  	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('')
  	}
}
