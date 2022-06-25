import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main(){

  await prisma.courses.create({
    data: {
      name: "Cursos de Lua",
      duration: 50,
      description: 'Curto curso de Lua',
      fk_id_teache: '26e9b065-5166-46b0-9a50-e2b431bfeb3f'
    }
  });
}

main();