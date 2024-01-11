import { z } from "zod";

const deleteUserDto = z.object({
  id: z.number(),
});

type DeleteUserDtoType = z.infer<typeof deleteUserDto>;

export { deleteUserDto, DeleteUserDtoType };
