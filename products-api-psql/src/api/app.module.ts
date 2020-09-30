import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InventoryModule } from './modules/inventory/inventory.module';

@Module({
  imports: [InventoryModule],
  controllers: [AppController],
})
export class AppModule {}
