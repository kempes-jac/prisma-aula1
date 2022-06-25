import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function main(){
  const result1 = await prisma.coursesModules.delete({
    where: {
      id_course_id_module: {
        id_course: 'a3a1d113-c248-4f56-9df9-dcd43e0a124f',
        id_module: 'fc1672dd-40f6-455b-9139-de139387242e'
      }
    }
  });
  console.log(result1);
  
};

main();