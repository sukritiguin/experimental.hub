import { FastifyInstance } from 'fastify';
import { User, UserCreateInput } from '../types/user';

export async function createUser(
  fastify: FastifyInstance,
  userData: UserCreateInput
): Promise<User> {
  const client = await fastify.pg.connect();
  try {
    const { rows } = await client.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [userData.username, userData.email]
    );
    return rows[0];
  } finally {
    client.release();
  }
}
