import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';

@Module({
  providers: [HttpModule, DatabaseModule],
})
export class DatabaseModule {}
