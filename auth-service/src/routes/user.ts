import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { userRegisterSchema } from '../schemas/userSchema.js';
import { createUser } from '../controllers/createUser.js';
import { UserCreateInput } from '../types/user';

interface ParamsWithId {
  id: string;
}

export async function userRouter(fastify: FastifyInstance, options: object) {
  fastify.get('/', async function (request: FastifyRequest, reply: FastifyReply) {
    reply.send({ hello: 'world' });
  });

  fastify.get('/:id', async function (
    request: FastifyRequest<{ Params: ParamsWithId }>,
    reply: FastifyReply
  ) {
    const userData: UserCreateInput = {
      username: 'sukriti',
      email: `sukriti@${request.params.id}`
    };
    const user = await createUser(fastify, userData);
    reply.send(user);
  });

  fastify.post(
    '/',
    { schema: userRegisterSchema },
    async function (
      request: FastifyRequest<{ Body: UserCreateInput }>,
      reply: FastifyReply
    ) {
      const user = await createUser(fastify, request.body);
      reply.send(user);
    }
  );
}
