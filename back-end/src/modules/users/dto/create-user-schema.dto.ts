import { z } from "zod";

const createUserSchemaDto = z.object({
  nickname: z.string().min(8).max(50),
  connectionId: z.string().max(150).optional(),
  ipAddress: z.string().max(16).optional(),
});

type CreateUserSchemaType = z.infer<typeof createUserSchemaDto>;

export { createUserSchemaDto, CreateUserSchemaType };
