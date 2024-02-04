import { z } from "zod";

const createUserDto = z.object({
  nickname: z.string().min(8).max(50),
  connectionId: z.string().max(150),
  ipAddress: z.string().max(16).optional(),
});

type CreateUserDtoType = z.infer<typeof createUserDto>;

export { createUserDto, CreateUserDtoType };
