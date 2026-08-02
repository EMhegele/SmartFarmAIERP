import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {

  const organization = await prisma.organization.create({
    data: {
      name: 'SmartFarm Demo Organization',
    },
  });


  const role = await prisma.role.create({
    data: {
      name: 'ADMIN',
    },
  });


  const passwordHash = await bcrypt.hash(
    'password',
    10,
  );


  const user = await prisma.user.create({
    data: {
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@test.com',
      passwordHash,
      organizationId: organization.id,

      userRoles: {
        create: {
          roleId: role.id,
        },
      },
    },
  });


  console.log('Admin created:', user.email);
}


main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });