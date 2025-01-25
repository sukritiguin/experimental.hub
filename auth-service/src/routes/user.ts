import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { User } from '../models/User';
import { UserAttributes } from '../types/user';

interface RouteOptions {
  prefix?: string;
}

export async function userRoutes(fastify: FastifyInstance, opts: RouteOptions) {
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const users = await User.findAll();
    reply.send({
      message: 'Success',
      data: users
    });
  });

  fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const { name, username, email, password, dateOfBirth } = request.body as UserAttributes;
    const user = await User.create({ 
      name: name,
      username: username,
      email: email,
      password: password,
      dateOfBirth: new Date(dateOfBirth)
     });
    reply.send({
      username: user.username,
      email: user.email,
      id: user.id,
      name: user.name
    });
  });
}


