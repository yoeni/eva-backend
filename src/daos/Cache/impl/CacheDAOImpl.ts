import * as redis from "redis";
import DAO from "../../../DAO";
import { Response } from '../../../utils/ResponseUtil';
import config from '../../../../config'
import { CacheDAO } from "../CacheDAO";

class CacheDAOImpl extends DAO implements CacheDAO {
    private client;

    constructor() {
        super();
        this.client = redis.createClient({
            url: `redis://${config.REDIS_HOSTNAME}`
        });

        this.client.on('connect', () => {
            console.log("connected");
        });
        this.client.on("error", (error) => {
            console.error(error);
        });
        this.client.connect();
    }

    public getCache = async (key: string): Promise<Response> => {
        this.log("Cache GET: " + key)
        try {
            const response = await this.client.get(key);
            this.log("Cache Response: " + response)
            const result = JSON.parse(response);
            return this.successResponse(result);
        } catch (err) {
            this.log(`Cache Error: ${err}`)
            return this.errorResponse(err.detail, 500);
        }
    }

    public setCache = async (key, value): Promise<Response> => {
        this.log(`Cache SET: ${key}: ${value}`)
        try {
            const response = await this.client.set(key, JSON.stringify(value));
            this.log(`Cache Response: ${response}`)
            return this.successResponse();
        } catch (err) {
            this.log(`Cache Error: ${err}`)
            return this.errorResponse(err.detail, 500);
        }
    }

    public deleteCache = async (key): Promise<Response> => {
        this.log(`Cache DELETE: ${key}`)
        try {
            const response = await this.client.del(key);
            this.log(`Cache Response: ${response}`)
            return this.successResponse();
        } catch (err) {
            this.log(`Cache Error: ${err}`)
            return this.errorResponse(err.detail, 500);
        }
    }

}
export default CacheDAOImpl;
