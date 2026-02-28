import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { RoomsModule } from './rooms/rooms.module';
import { SchedulesModule } from './schedules/schedules.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TeacherSubjectsModule } from './teacher-subjects/teacher-subjects.module';
import { RoomSchedulesModule } from './room-schedules/room-schedules.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    AuthModule,
    TeachersModule,
    RoomsModule,
    SchedulesModule,
    SubjectsModule,
    TeacherSubjectsModule,
    RoomSchedulesModule,
    PrismaModule,
    ServiceModule],
  providers: [AppService],
})
export class AppModule { }
