import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.user.createMany({
    data: [
      {
        name: "Mohamed",
        email: "mohamed@test.com",
        age: 19,
      },
      {
        name: "Peter",
        email: "peter@test.com",
        age: 25,
      },
    ],
  });
  console.log(
    await prisma.user.findMany({
      where: {
        userPreference: {
          emailUpdated: true,
        },
      },
      orderBy: {
        age: "asc",
      },
      take: 1,
    })
  );
}

main().catch((e) => {
  console.error(e.message);
});
