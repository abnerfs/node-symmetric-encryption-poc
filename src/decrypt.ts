import { MyCrypt } from "./my-crypt";

const key = process.argv[2];
const encryptedMessage = process.argv[3];

if (!key || !encryptedMessage) {
    console.log(`Usage: decrypt <key> <encryptedMessage>`);
    process.exit(0);
}

const [message, iv] = encryptedMessage.split(':');
if (!message || !iv) {
    console.log(`Error: Invalid encrypted message`);
}

const decryptedMessage = MyCrypt.decrypt(key, iv, message);
console.log(decryptedMessage);