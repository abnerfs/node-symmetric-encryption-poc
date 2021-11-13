import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

export class MyCrypt {
    static createRandomKeyHex() {
        const key = randomBytes(32);
        return key.toString('hex');
    }

    static convertByteArrayToHex(bytes: Buffer) {
        return bytes.toString('hex');
    }

    static convertKeyRawToBytes(key: string) {
        return Buffer.from(key, 'hex');
    }

    static createInitialVector() {
        return randomBytes(16);
    }

    static encrypt(rawKey: string, message: string) {
        const iv = this.createInitialVector();
        const key = this.convertKeyRawToBytes(rawKey);

        const cipher = createCipheriv('aes256', key, iv);
        const encryptedMessage = cipher.update(message, 'utf-8', 'hex')
            + cipher.final('hex');

        return {
            encryptedMessage,
            iv: this.convertByteArrayToHex(iv)
        };
    }

    static decrypt(rawKey: string, rawIv: string, encryptedMessage: string) {
        const iv = this.convertKeyRawToBytes(rawIv);
        const key = this.convertKeyRawToBytes(rawKey);

        const decipher = createDecipheriv('aes256', key, iv);
        const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8')
            + decipher.final('utf-8');

        return decryptedMessage;
    }
}
