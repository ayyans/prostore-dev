//import { PrismaClient } from '../lib/generated/prisma';
//import { PrismaClient } from '@prisma/client';
import 'dotenv/config'
import { prisma } from '../lib/prisma';
import sampleData from './sample-data';
 //const prisma = new PrismaClient();
async function main(){
   
    await prisma.product.deleteMany();

    await prisma.product.createMany({data: sampleData.products});

    console.log('Database seeded sucessfully!');
}
main().then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })