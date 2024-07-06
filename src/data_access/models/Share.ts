import { Table, Column, Model, DataType, Default, PrimaryKey, HasMany } from 'sequelize-typescript';
import { PortfolioShare } from './PortfolioShare';
import { Trade } from './Trade';

@Table
export class Share extends Model<Share> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: string;
  
  @Column({
    type: DataType.CHAR(3),
    allowNull: false,
    unique: true,
  })
  symbol!: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updatedAt!: Date;

  @HasMany(() => PortfolioShare)
  portfolioShares!: PortfolioShare[];

  @HasMany(() => Trade)
  trades!: Trade[];
}
