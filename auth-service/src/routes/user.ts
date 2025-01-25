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
    try {
      const { username, email, password, name, dateOfBirth } = request.body as any;
      const user = await User.create({
        username,
        email,
        name,
        password: password,
        dateOfBirth: new Date(dateOfBirth)
      });
      reply.send({
        username: user.username,
        email: user.email,
        id: user.id,
        name: user.name
      });
    } catch (error: any) {
      if (error.name === 'SequelizeValidationError') {
        reply.status(400).send({
          error: 'Validation Error',
          message: error.errors[0].message
        });
      } else {
        reply.status(500).send({
          error: 'Internal Server Error',
          message: error.message
        });
      }
    }
  });
}
