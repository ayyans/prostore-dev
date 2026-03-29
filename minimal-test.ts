// minimal-test.ts
import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

async function test() {
  console.log('Testing connection...')
  console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL)
  
  try {
    const prisma = new PrismaClient()
    await prisma.$connect()
    console.log('✅ Connection successful!')
    await prisma.$disconnect()
  } catch (error) {
    console.error('❌ Connection failed:', error)
  }
}

test()