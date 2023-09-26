import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './modules/students/students.module';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { DisciplinesModule } from './modules/disciplines/disciplines.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { ContentsModule } from './modules/contents/contents.module';
import ormconfig from './config/orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    StudentsModule,
    DisciplinesModule,
    LessonsModule,
    ContentsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
