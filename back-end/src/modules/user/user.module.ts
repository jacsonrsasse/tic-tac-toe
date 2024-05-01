import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRedisRepository } from './repositories/user.redis-repository';
import { RedisClientAdapter } from 'src/adapters/redis-client.adapter';

@Module({
  providers: [
    RedisClientAdapter,
    UserService,
    { provide: 'USER_REPOSITORY', useClass: UserRedisRepository },
  ],
  exports: [UserService],
})
export class UserModule {}
