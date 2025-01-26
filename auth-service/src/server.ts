import Fastify, { FastifyInstance } from 'fastify';
import fastifyPostgres from '@fastify/postgres';
import {userRoutes} from './routes/user';
import sequelize from './sequelize';
import { User } from './models/User';
import Profile from './models/Profile';
import { initAssociations } from './models/associations';

const fastify: FastifyInstance = Fastify({
  logger: true
});

fastify.register(fastifyPostgres, {
  connectionString: 'postgresql://postgres:admin@localhost:5432/fastify'
});

fastify.register(userRoutes, { prefix: '/api/users' });

const start = async () => {
  try {
    // Initialize associations after models are loaded
    initAssociations(sequelize);
    
    // Sync database
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully');

    await fastify.listen({ port: 3000 });
    const address = fastify.server.address();
    fastify.log.info(`Server is now listening on ${address}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
