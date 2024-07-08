import cron from 'node-cron';
import { ShareDAO } from './daos/Share/ShareDAO';
import { DAOFactory } from './factories/DAOFactory';
import WebSocket from './WebSocket';

class CronJobs {
    private shareDAO: ShareDAO;
    private ws: WebSocket;
    constructor(ws: WebSocket) {
        this.shareDAO = DAOFactory.getShareDAO();
        this.ws = ws;
        this.updateSharePrices = this.updateSharePrices.bind(this);
        this.sendShares = this.sendShares.bind(this);

        cron.schedule('*/10 * * * * *', this.updateSharePrices).start();
        cron.schedule('*/5 * * * * *', this.sendShares).start();
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

    private async sendShares() {
        const response = await this.shareDAO.getAllShares();
        if (!response.isSuccessfullExecution) {
            console.error('Failed to fetch shares for sending clients.');
            return;
        }
        try {
            this.ws.SendShares(response.result)
        } catch (error) {
            console.error('Error sending shares!', error);
            return;
        }
        console.log('sended shares!!!!');
    }
}

export default CronJobs;
