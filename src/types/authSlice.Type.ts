export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export type TinitialState = {
  user: null | TUser;
  token: null | string;
};
