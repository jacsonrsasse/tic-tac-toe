import { z } from "zod";

const createSessionDto = z.object({
  body: z.object({
    nickname: z.string().min(8).max(50),
  }),
});

type CreateSessionDtoType = z.infer<typeof createSessionDto>;

export { createSessionDto, CreateSessionDtoType };
