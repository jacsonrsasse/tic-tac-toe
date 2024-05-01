import { env } from '@config/env';
import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

Injectable();
export class AuthTokenService {
  public generateTokens(subject: any) {
    const token = sign({}, env.JWT_SECRET, {
      subject,
      expiresIn: '10 seconds',
    });
    const refreshToken = sign({}, env.JWT_SECRET, {
      subject,
      expiresIn: '20 minutes',
    });

    return [token, refreshToken];
  }
}
