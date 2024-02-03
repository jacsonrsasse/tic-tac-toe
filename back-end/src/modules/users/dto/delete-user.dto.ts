import { z } from "zod";

const deleteUserDto = z.object({
  id: z.string().uuid(),
});

type DeleteUserDtoType = z.infer<typeof deleteUserDto>;

export { deleteUserDto, DeleteUserDtoType };
