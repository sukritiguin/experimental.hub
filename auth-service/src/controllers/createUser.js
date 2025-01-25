import fastify from "../../server.js";

async function createUser(name, email) {
    fastify.pg.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
}

export { createUser };