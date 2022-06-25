import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
  // await prisma.modules.create({
  //   data:{
  //     name: 'Modulo 1',
  //     description: 'Modulo Inicial 1',
  //     coursesModules: {
  //       create: {
  //         courses: {
  //           create: {
  //             name: 'Curso 1',
  //             duration: 20,
  //             teacher: {
  //               create: {
  //                 name: 'Pedro Pedro'
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // });


  // await prisma.coursesModules.create({
  //   data:{
  //     modules: {
  //       connect: {
  //         name: "Modulo 1"
  //       }
  //     },
  //     courses: {
  //       connect: {
  //         name: "Cursos de Pascal"
  //       }
  //     }
  //   }
  // });


  const result1 = await prisma.modules.findMany({
    include:{
      coursesModules: true
    }
  });

  console.log(JSON.stringify(result1));

  const result2 = await prisma.courses.findMany({
    include: {
      teacher: true,
      coursesModules: true
    }
  });

  console.log(JSON.stringify(result2));
  
  const result3 = await prisma.coursesModules.findMany({
    include: {
      courses: true,
      modules: true
    }
  });

  console.log(JSON.stringify(result3));
  


  
}

main();