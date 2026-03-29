// bare-test.js
require('dotenv').config();

console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
console.log('Current directory:', process.cwd());

try {
  console.log('Creating PrismaClient instance...');
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();
  console.log('PrismaClient created successfully!');
  
  prisma.$connect()
    .then(() => {
      console.log('✅ Connected to database!');
      return prisma.$disconnect();
    })
    .then(() => {
      console.log('✅ Disconnected');
      process.exit(0);
    })
    .catch((err) => {
      console.error('❌ Connection error:', err);
      process.exit(1);
    });
} catch (err) {
  console.error('❌ Error creating PrismaClient:', err);
}