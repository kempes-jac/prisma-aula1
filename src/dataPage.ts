import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

async function main(){

  const items = 7;
  const count = await prisma.coursesModules.count();
  let pages = ~~(count/items);
  pages = (count%items==0) ? pages : pages+1;

  for( let i=0; i<pages;i++){
    console.log('#######################################################');
    console.log(`Page: ${i+1}`);
    
    const result1 = await prisma.coursesModules.findMany({
      take: items,
      skip: items*i
    });
    console.log(result1);
    
    console.log('#######################################################');


  }
  
  
  
}

main();