import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main(){

  await prisma.courses.create({
    data: {
      name: "Cursos de C",
      duration: 50,
      description: 'Curto curso de C',
      teacher: {
        create: {
          name: 'Antônio Antônio'
        }
      }
    }
  });
}

main();