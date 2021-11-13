# NodeJS Symmetric Encryption POC
I've written this poc in order to learn more about symmetric encryption, just a simple program that can encrypt and decrypt messages using AES256.

# Installation

Same as always clone and npm install

# Usage

First you need to generate a 32 bytes key
```
npm run generate-key
```

Then you can encrypt your messages using
```
npm run encrypt "my-key-generated-before" "my-message"
```

To decrypt a message you can use

```
npm run decrypt "my-key-generated-before" "my-encrypted-message"
```