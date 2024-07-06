import { Table, Column, Model, DataType, PrimaryKey, Default, AfterCreate, BeforeDestroy, HasMany } from 'sequelize-typescript';
import { Portfolio } from './Portfolio';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt!: Date;


  @HasMany(() => Portfolio)
  portfolios!: Portfolio[];

  @AfterCreate
  static async createPortfolio(instance: User) {
    await Portfolio.create({ userId: instance.id });
  }

  @BeforeDestroy
  static async deletePortfolio(instance: User) {
    await Portfolio.destroy({ where: { userId: instance.id } });
  }
}
