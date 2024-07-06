import cron from 'node-cron';
import { ShareDAO } from './daos/Share/ShareDAO';
import { DAOFactory } from './factories/DAOFactory';

class CronJobs {
    private shareDAO: ShareDAO;
    constructor() {
        this.shareDAO = DAOFactory.getShareDAO();
        this.updateSharePrices = this.updateSharePrices.bind(this);

        cron.schedule('*/1 * * * *', this.updateSharePrices).start();
    }

    private async updateSharePrices() {
        const response = await this.shareDAO.getAllShares();
        if (!response.isSuccessfullExecution) {
            console.error('Failed to fetch shares for updating prices.');
            return;
        }
        try {
            for (const share of response.result) {
                const randomFactor = Math.random() < 0.5 ? -1 : 1;
                await this.shareDAO.updateSharePrices(share.symbol, Number(share.price) + Math.random() * 5 * randomFactor);
            }
        } catch (error) {
            console.error('Error updating share prices:', error);
            return;
        }
        console.log('Shares are updated!');
    }
}

export default CronJobs;
