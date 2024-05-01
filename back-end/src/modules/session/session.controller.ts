import { Body, Controller, Param, Post, Put, Request } from '@nestjs/common';
import { CreateSessionUseCase } from './use-cases/create-session.usecase';
import { CreateSessionDto } from './dto/create-session.dto';
import { Request as Req } from 'express';
import { DeleteSessionUseCase } from './use-cases/delete-session.usecase';

@Controller('session')
export class SessionController {
  constructor(
    private readonly createSessionUseCase: CreateSessionUseCase,
    private readonly deleteSessionUseCase: DeleteSessionUseCase,
  ) {}

  @Post('login')
  async create(
    @Body() createSession: CreateSessionDto,
    @Request() req: Req,
  ): Promise<[string, string]> {
    return this.createSessionUseCase.execute({
      data: { ...createSession, ipAddress: req.ip },
    });
  }

  @Put('logout/:id')
  async delete(@Param(':id') id: string): Promise<string> {
    return this.deleteSessionUseCase.execute({ id });
  }
}
