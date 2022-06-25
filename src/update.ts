import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main(){
  await prisma.courses.update({
    data:{
      duration: 180,
      description: null
    },
    where: {
      id: "0f28a04b-ee8b-4183-81d6-23ee38ead651"
    }
  });
}

main();