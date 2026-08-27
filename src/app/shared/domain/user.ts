export type User = {
  id: string;
  firstName: string;
  lastName: string;
  nickName: string;
  date: string;
}

export type CreatedUser = User & {
  authHash: string;
}

export type UserNickname = string;

export type CreatedUsers = Record<UserNickname, CreatedUser>;