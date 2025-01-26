import { Sequelize } from 'sequelize';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const config = require('../config/config.json');

async function resetDatabase() {
  const env = process.env.NODE_ENV || 'development';
  const dbConfig = config[env];

  const sequelize = new Sequelize(dbConfig);

  try {
    // Drop tables if they exist
    await sequelize.query('DROP TABLE IF EXISTS "SequelizeMeta" CASCADE');
    await sequelize.query('DROP TABLE IF EXISTS "profiles" CASCADE');
    await sequelize.query('DROP TABLE IF EXISTS "users" CASCADE');
    
    console.log('Tables dropped successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error resetting database:', error);
    process.exit(1);
  }
}

resetDatabase();
