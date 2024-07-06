import { Portfolio } from './models/Portfolio';
import { PortfolioShare } from './models/PortfolioShare';
import { Share } from './models/Share';
import { Trade } from './models/Trade';
import { User } from './models/User';
import { portfoliosData, portfolioSharesData, shareData, tradesData, usersData } from './seedData';
import sequelize from './sequelize';

export const bulkInsertExample = async () => {
  const transaction = await sequelize.transaction();
  try {
    await Share.bulkCreate(shareData, { transaction, logging: false });
    await User.bulkCreate(usersData, { transaction, logging: false });
    await Portfolio.bulkCreate(portfoliosData, { transaction, logging: false });
    await PortfolioShare.bulkCreate(portfolioSharesData, { transaction, logging: false });
    await Trade.bulkCreate(tradesData, { transaction, logging: false });

    await transaction.commit();
    console.log('Bulk insert successful:');
  } catch (error) {
    await transaction.rollback();
    console.error('Error in bulk insert!');
  }
};

