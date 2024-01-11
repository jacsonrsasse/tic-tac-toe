import { z } from "zod";

const deleteteSessionDto = z.object({
  params: z.object({
    id: z.coerce.number().min(1),
  }),
});

type DeleteSessionDtoType = z.infer<typeof deleteteSessionDto>;

export { deleteteSessionDto, DeleteSessionDtoType };
