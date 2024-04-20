/**
 * @todo This repository must be refactored or removed...
 */

// import { injectable } from "inversify";
// import { CreateUserDtoType } from "../../dto/create-user.dto";
// import { DrizzleClientService } from "@shared/services/drizzle-client.service";
// import { users as userTable } from "@database/schema";
// import { DeleteUserDtoType } from "../../dto/delete-user.dto";
// import { eq } from "drizzle-orm";
// import { UserRepositoryActions } from "../interfaces/user-repository-actions.interface";
// import { User } from "@modules/users/entities/user.entity";

// @injectable()
// export class UserRepository implements UserRepositoryActions {
//   constructor(private readonly drizzleClientService: DrizzleClientService) {}

//   public async create(createUser: CreateUserDtoType) {
//     const users = await this.drizzleClientService
//       .getClient()
//       .insert(userTable)
//       .values(createUser)
//       .returning({
//         userId: userTable.id,
//         nickname: userTable.nickname,
//         connectionId: userTable.connectionId,
//         ipAddress: userTable.ipAddress,
//       });

//     const user = users.shift();
//     if (!user) {
//       throw new Error("Deu ruim pra criar o usuário");
//     }

//     return User.getInstance(user);
//   }

//   public async listAll() {
//     const users = await this.drizzleClientService
//       .getClient()
//       .select({
//         userId: userTable.id,
//         nickname: userTable.nickname,
//         connectionId: userTable.connectionId,
//         ipAddress: userTable.ipAddress,
//       })
//       .from(userTable);

//     return users.map((user) => User.getInstance(user));
//   }

//   public async delete(deleteUser: DeleteUserDtoType) {
//     const data = await this.drizzleClientService
//       .getClient()
//       .delete(userTable)
//       .where(eq(userTable.id, deleteUser.id))
//       .returning({ deletedUserId: userTable.id });

//     if (data) {
//       return data.shift();
//     }
//   }
// }
