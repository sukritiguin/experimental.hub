import Fastify, { FastifyInstance } from 'fastify';
import { userRouter } from './routes/user.js';
import fastifyPostgres from '@fastify/postgres';

const fastify: FastifyInstance = Fastify({
  logger: true
});

fastify.register(fastifyPostgres, {
  connectionString: 'postgresql://postgres:admin@localhost:5432/fastify'
});

fastify.register(userRouter, { prefix: '/users' });

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    const address = fastify.server.address();
    fastify.log.info(`Server is now listening on ${address}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

export default fastify;
