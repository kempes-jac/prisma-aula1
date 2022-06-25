import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

async function main(){
  await prisma.authors.create({
    data: {
      name: "Carlos Carlos",
      books: {
        create: {
          name: 'C livro'
        }
      }
    }
  });

  await prisma.authors.create({
    data: {
      name: "Daniel Daniel",
      books: {
        createMany:{
          data: [
            {
              name: 'D1 Livro'
            },
            {
              name: 'D2 Livro'
            },
            {
              name: 'D3 Livro'
            }
          ]
        }
      }
    }
  });
  
  const result =  await prisma.authors.findMany({
    include: {
      books: true
    }
  });
  console.log(result);
  
}

main();