import { Table, Column, Model, ForeignKey, DataType, Default, PrimaryKey, BeforeDestroy } from 'sequelize-typescript';
import { User } from './User';
import { PortfolioShare } from './PortfolioShare';
import { Trade } from './Trade';

@Table
export class Portfolio extends Model<Portfolio> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: string;
  
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId!: string;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt!: Date;

  @BeforeDestroy
  static async deletePortfolio(instance: Portfolio) {
    await PortfolioShare.destroy({ where: { portfolioId: instance.id } });
    await Trade.destroy({ where: { portfolioId: instance.id } });
  }
}
