import { FastifyInstance } from "fastify";
import { createUserHandler } from "../controllers/createUser.controller";
import { getAllUserHandler } from "../controllers/getAllUsers.controller";
import { getUserByEmailHandler } from "../controllers/getUserByEmail.controller";

const userRoutes = async (fastify: FastifyInstance) => {
    fastify.post('/', createUserHandler);
    fastify.get('/', getAllUserHandler);
    fastify.get('/:email', getUserByEmailHandler);
}


export default userRoutes;