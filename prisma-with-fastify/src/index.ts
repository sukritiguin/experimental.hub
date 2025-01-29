import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/user.route';

const prisma = new PrismaClient();
const fastify = Fastify({
  logger: true,
});

fastify.get('/', async (request, reply) => {
  const users = await prisma.user.findMany();
  return users;
});

fastify.register(userRoutes, { prefix: '/users' });

const start = async () => {
  try {
    await fastify.listen({ port: 4000 });
    console.log('Server is running on http://localhost:4000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

export {prisma}

start();
