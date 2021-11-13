import { MyCrypt } from "./my-crypt";

const key = process.argv[2];
const message = process.argv[3];

if (!key || !message) {
    console.log('Usage: encrypt <key> <message>');
    process.exit(0);
}

const { encryptedMessage, iv } = MyCrypt.encrypt(key, message);
console.log(`${encryptedMessage}:${iv}`);