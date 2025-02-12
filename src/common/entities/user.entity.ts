import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'userInfo' })
export class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  fullName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  token: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  smsCode: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  deviceToken: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  googleId: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  facebookId: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  twitterId: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  gitHubId: string;

  @Column({ type: 'varchar', length: 255, default: 'user' })
  role: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  deletedAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  lastLoginAt: Date;
}
