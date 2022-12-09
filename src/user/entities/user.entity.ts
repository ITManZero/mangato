import {
  Column,
  Entity, PrimaryGeneratedColumn
} from "typeorm";
import { TimestampEntity } from "../../common/entity/timestampEntity";

@Entity("users")
export class User extends TimestampEntity {

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true, primaryKeyConstraintName: "pk_idx_id" })
  id: number;

  @Column("varchar", { name: "full_name", nullable: false, length: 75 })
  fullName: string;

  @Column("varchar", { name: "email", unique: true, nullable: false, length: 255 })
  email: string;

  @Column("varchar", { name: "password", nullable: false, length: 100 })
  password: string;

  @Column("enum", { name: "gender", nullable: false, enum: ["male", "female"] })
  gender: "male" | "female";

  @Column("date", { name: "date_of_birth", nullable: false })
  dateOfBirth: Date;
}
