const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
};

async function runMigrations() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const migrationPath = path.join(__dirname, 'migrations');
    const migrationFiles = fs.readdirSync(migrationPath);

    for (let migrationFile of migrationFiles) {
      const migrationFilePath = path.join(migrationPath, migrationFile);
      const migrationFileContent = fs.readFileSync(migrationFilePath, 'utf8');

      console.log(`Running migration ${migrationFile}`);
      await connection.query(migrationFileContent);
    }

    console.log('All migrations have been executed!');
    process.exit();
  } catch (error) {
    console.error('Failed to execute migrations:', error);
    process.exit(1);
  }
}

runMigrations();
