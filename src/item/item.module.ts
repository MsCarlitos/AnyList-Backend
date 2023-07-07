import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Item } from './entities/item.entity';
import { ItemsService } from './item.service';
import { ItemsResolver } from './item.resolver';

@Module({
  providers: [ItemsResolver, ItemsService],
  imports: [
    TypeOrmModule.forFeature([ Item ])
  ]
})
export class ItemModule {}
