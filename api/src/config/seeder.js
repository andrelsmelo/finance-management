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

async function runSeeders() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const seederPath = path.join(__dirname, 'seeders');
    const seederFiles = fs.readdirSync(seederPath);

    for (let seederFile of seederFiles) {
      const seederFilePath = path.join(seederPath, seederFile);
      const seederFileContent = fs.readFileSync(seederFilePath, 'utf8');

      console.log(`Running seeder ${seederFile}`);
      await connection.query(seederFileContent);
    }

    console.log('All seeders have been executed!');
    process.exit();
  } catch (error) {
    console.error('Failed to execute seeders:', error);
    process.exit(1);
  }
}

runSeeders();
