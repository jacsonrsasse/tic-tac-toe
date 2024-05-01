import { Response } from "express";

export function appendAuthCookies(response: Response, tokens: string[]) {
  const [token, refreshToken] = tokens;
  response
    .cookie("auth", token, {
      httpOnly: true,
      secure: true,
      maxAge: 10 * 60000,
    })
    .cookie("refresh", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 20 * 60000,
    });
}
