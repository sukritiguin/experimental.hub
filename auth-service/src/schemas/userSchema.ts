import { Type } from '@sinclair/typebox';

export const userRegisterSchema = {
  body: Type.Object({
    username: Type.String(),
    email: Type.String({ format: 'email' })
  }),
  response: {
    200: Type.Object({
      id: Type.Number(),
      username: Type.String(),
      email: Type.String()
    })
  }
};
