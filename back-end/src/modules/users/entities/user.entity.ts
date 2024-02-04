import { ExcludeMethods } from "@shared/utils/exclude-methods.util";

type UserProps = ExcludeMethods<User>;

export class User {
  userId: string;
  nickname: string;
  connectionId: string;
  ipAddress?: string;
  victories?: number;
  defeats?: number;

  constructor(props: UserProps) {
    this.userId = props.userId;
    this.nickname = props.nickname;
    this.connectionId = props.connectionId;
    this.ipAddress = props.ipAddress;
    this.victories = props.victories || 0;
    this.defeats = props.defeats || 0;
  }

  static getInstance(props: UserProps) {
    return new User(props);
  }
}
