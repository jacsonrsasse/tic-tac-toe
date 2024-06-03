import { env } from '@config/env';
import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';

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

  public static verifyToken(token: string): boolean {
    try {
      return !!verify(token, env.JWT_SECRET);
    } catch (error) {
      return false;
    }
  }
}
