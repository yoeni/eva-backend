import { Table, Column, Model, ForeignKey, DataType, Default, PrimaryKey, BelongsTo } from 'sequelize-typescript';
import { Portfolio } from './Portfolio';
import { Share } from './Share';

@Table
export class PortfolioShare extends Model<PortfolioShare> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: string;
  
  @ForeignKey(() => Portfolio)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  portfolioId!: string;

  @ForeignKey(() => Share)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  shareId!: string;
  
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  quantity!: number;

  @BelongsTo(() => Portfolio)
  portfolio!: Portfolio;

  @BelongsTo(() => Share)
  share!: Share;
}
