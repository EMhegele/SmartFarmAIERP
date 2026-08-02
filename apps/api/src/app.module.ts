import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { FarmsModule } from './modules/farms/farms.module';
import { AuthModule } from './modules/auth/auth.module';
import { FacilitiesModule } from './modules/facilities/facilities.module';

@Module({
  imports: [PrismaModule, OrganizationsModule, UsersModule, RolesModule, FarmsModule, AuthModule, FacilitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
