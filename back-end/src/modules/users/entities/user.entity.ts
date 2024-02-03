type ExcludeMethods<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? never : T[K];
};

type UserProps = ExcludeMethods<User>;

export class User {
  userId: string;
  nickname: string;
  connectionId: string | null;
  ipAddress: string | null;
  victories: number;
  defeats: number;

  constructor(props: UserProps) {
    this.userId = props.userId;
    this.nickname = props.nickname;
    this.connectionId = props.connectionId;
    this.ipAddress = props.ipAddress;
    this.victories = props.victories;
    this.defeats = props.defeats;
  }

  static getInstance(props: UserProps) {
    return new User(props);
  }
}
