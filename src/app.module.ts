import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "mangato",
    autoLoadEntities: true,
    synchronize: true,
    migrations: ["src/migrations/**/*{.ts,.js}"]
  })],
})
export class AppModule {
}
