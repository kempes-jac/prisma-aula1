import { Prisma, PrismaClient, Modules } from "@prisma/client";
import { Sql } from "@prisma/client/runtime";


const prisma = new PrismaClient();

async function main(){
  const teacherName = 'Pedro'
  const result = await prisma.$queryRaw<Modules[]>(
    Prisma.sql`SELECT m.* FROM modules m INNER JOIN courses_modules cm ON cm.id_module=m.id INNER JOIN courses c ON c.id=cm.id_course INNER JOIN teachers t ON t.id = c.fk_id_teache WHERE t.name LIKE '%Pedro%'`
  );
    
  result.map( module => console.log(module));
  
}

main();