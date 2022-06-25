import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function main(){
  const result1 = await prisma.courses.findMany({
    where:{
      OR: [
        {
          name: {
            contains: 'de c',
            mode: 'insensitive'
          }
        },
        {
          coursesModules: {
            some: {
              modules: {
                description: {
                  contains: 'matemática',
                  mode: 'insensitive'
                }
              }
            }
          }
        },
      ],
      NOT: {
        name: {
          contains: 'pascal',
          mode: 'insensitive'
        }
      }
      
    }
  });
  console.log(result1);
  
}

main();