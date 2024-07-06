import { Table, Column, Model, ForeignKey, DataType, PrimaryKey, Default, BelongsTo } from 'sequelize-typescript';
import { Portfolio } from './Portfolio';
import { Share } from './Share';
import { TradeType } from '../../daos/Trade/TradeDAO';

@Table
export class Trade extends Model<Trade> {
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
  })
  tradeType!: TradeType;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  tradePrice!: number;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  tradeTime!: Date;

  @BelongsTo(() => Portfolio)
  portfolio!: Portfolio;


  @BelongsTo(() => Share)
  share!: Share;
}
