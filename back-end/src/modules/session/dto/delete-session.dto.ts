import { z } from "zod";

const deleteteSessionDto = z.object({
  params: z.object({
    id: z.string().cuid2(),
  }),
});

type DeleteSessionDtoType = z.infer<typeof deleteteSessionDto>;

export { deleteteSessionDto, DeleteSessionDtoType };
