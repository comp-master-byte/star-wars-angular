export type User = {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  date: string;
}
export type CreatedUser = User & {
  authHash: string;
}
export type UserNickname = string;
export type CreatedUsers = Record<UserNickname, CreatedUser>;

export type AuthSecrets = {
  nickname: string;
  password: string;
}

export type AuthUser = AuthSecrets;
export type UserResetPassword = {
  nickname: string;
  newPassword: string;
  repeatNewPassword: string;
}