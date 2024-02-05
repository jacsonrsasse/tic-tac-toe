declare namespace Express {
  export interface Request {
    user: {
      connectionId: string;
    };
  }
}
