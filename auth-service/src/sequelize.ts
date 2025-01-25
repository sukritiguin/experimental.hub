import { Sequelize } from "@sequelize/core";

const sequelize = new Sequelize({
  dialect: "postgres",
  logging: false, // Set to true for query logging
  url: 'postgresql://postgres:admin@localhost:5432/fastify'
});

export default sequelize;
