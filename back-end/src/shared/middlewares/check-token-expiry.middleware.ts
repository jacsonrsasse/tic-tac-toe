import { env } from "@config/env";
import { appendAuthCookies } from "@shared/utils/append-auth-cookies.util";
import { generateUserTokens } from "@shared/utils/generate-user-tokens.util";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

const checkTokenExpiry = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { auth, refresh } = request.cookies;

  if (!auth) {
    return response.status(401).send({ message: "Unauthorized" });
  }

  try {
    const decoded = verify(auth, env.JWT_SECRET) as ITokenPayload;

    const { sub } = decoded;
    request.user = {
      connectionId: sub,
    };

    return next();
  } catch (error: any) {
    if (error.name !== "TokenExpiredError") {
      return response.status(403).json({ error: "Token inválido" });
    }
  }

  try {
    const refreshDecoded = verify(refresh, env.JWT_SECRET) as ITokenPayload;
    const { sub } = refreshDecoded;

    const tokens = generateUserTokens(sub);
    console.log("Refreshed tokens", tokens);
    appendAuthCookies(response, tokens);

    return next();
  } catch (error: any) {
    return response.status(401).json({ error: "Refresh token inválido" });
  }
};

export default checkTokenExpiry;
