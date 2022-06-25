import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){

  const course = [
    {
      name: 'Curso de NodeJs',
      duration: 200,
      description: 'Curso excelente de NodeJS'
    },
    {
      name: 'Curso de ReactJS',
      duration: 200,
      description: 'Curso excelente de ReactJS'
    },
    {
      name: 'Curso de React Native',
      duration: 300,
      description: 'Curso excelente de React Native'
    },
    {
      name: 'Curso de Elixir',
      duration: 400,
      description: 'Curso excelente de Elixir'
    },

  ]
  
  course.map( async course => 
    await prisma.courses.create( {data: course})
  );
  
}

main()