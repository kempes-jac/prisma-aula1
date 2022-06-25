import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main(){

  await prisma.courses.create({
    data: {
      name: "Cursos de Pascal",
      duration: 50,
      description: 'Curto curso de Pascal',
      teacher: {
        connect: {
          name: 'Maria Maria'
        }
      }
    }
  });
}

main();