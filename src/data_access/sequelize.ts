import { Sequelize } from 'sequelize-typescript';
import { User } from './models/User';
import { Share } from './models/Share';
import { Portfolio } from './models/Portfolio';
import { Trade } from './models/Trade';
import { PortfolioShare } from './models/PortfolioShare';
import config from '../../config'

const sequelize = new Sequelize({
  database: config.POSTGRES_DB,
  dialect: 'postgres',
  username: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  storage: ':memory:',
  models: [User, Share, Portfolio, Trade, PortfolioShare], // Register models here
});

export default sequelize;
