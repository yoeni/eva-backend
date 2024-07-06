import crypto from 'crypto';
import config from '../../config';

class Encryptor {
    private key: Buffer;
    private iv: Buffer;
    constructor() {
        this.init();
    }

    private init = () => {
        this.key = Buffer.from(config.ENCRYPTION_KEY, 'hex');
        this.iv = Buffer.from(config.IV, 'hex');
    }

    public encrypt = (data: string) => {
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.iv);
        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }
    public decrypt = (data: string) => {
        const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, this.iv);
        let decrypted = decipher.update(data, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}
export default new Encryptor();