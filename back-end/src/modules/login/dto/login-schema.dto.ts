import { z } from "zod";

const loginSchemaDto = z.object({
  body: z.object({
    nickname: z.string().min(8).max(50),
  }),
});

type LoginSchemaType = z.infer<typeof loginSchemaDto>;

export { loginSchemaDto, LoginSchemaType };
