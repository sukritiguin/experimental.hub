import { userRegisterSchema} from "../schemas/userSchema.js";
import { createUser } from "../controllers/createUser.js";

async function userRouter(fastify, options) {
    fastify.get('/', async function (request, reply) {
        reply.send({ users: 'users' })
    })
    fastify.get('/:id', async function (request, reply) {
        createUser("sukriti", "sukriti@"+ request.params.id);
        reply.send({ user: 'user1', id: request.params.id })
    })
    fastify.post('/', { schema: userRegisterSchema } , async function (request, reply) {
        const requestBody = request.body
        console.log(requestBody)
        reply.send({ id: 1, name: requestBody.name, email: requestBody.email })
    })
    fastify.put('/:id', async function (request, reply) {
        reply.send({ user: 'user' })
    })
    fastify.delete('/:id', async function (request, reply) {
        reply.send({ user: 'user' })
    })
}

export default userRouter;