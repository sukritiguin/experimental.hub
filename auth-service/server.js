import Fastify  from "fastify";
import userRouter from "./src/routes/user.js";
import fastifyPostgres from "@fastify/postgres";

const fastify = Fastify({
    logger: true
})

fastify.register(fastifyPostgres, {
connectionString: 'postgresql://postgres:admin@localhost:5432/fastify', // Replace with your details
});

fastify.register(userRouter, { prefix: '/users' })

const PORT = process.env.PORT || 4000;

// Declare a route
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

fastify.get('/test', function (request, reply) {
    reply.send({ hello: 'test' })
})
  
// Run the server!
fastify.listen({ port: PORT }, function (err, address) {
    console.log(`Server listening on ${address}`);
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
// Server is now listening on ${address}
})

export default fastify;