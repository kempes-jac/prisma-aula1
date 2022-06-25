import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main(){
  await prisma.courses.create({
    data: {
      name: "Cursos de PhP",
      duration: 500,
      description: 'Longo curso de PhP',
      teacher: {
        connectOrCreate: {
          where: {
            name: "João João"
          },
          create: {
            name: 'João João'
          }
        }
      }
    }
  });
}

main();