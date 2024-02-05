import { env } from "@config/env";
import { sign } from "jsonwebtoken";

export function generateUserTokens(subject: any) {
  const token = sign({}, env.JWT_SECRET, {
    subject,
    expiresIn: "10 seconds",
  });
  const refreshToken = sign({}, env.JWT_SECRET, {
    subject,
    expiresIn: "20 minutes",
  });

  return [token, refreshToken];
}
