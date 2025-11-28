import * as crypto from "crypto";

// Example: Hashing with SHA256
const dataToHash = "my secret message";
const hash = crypto.createHash("sha256").update(dataToHash).digest("hex");
console.log(`SHA256 Hash: ${hash}`);

// Example: AES-256-CBC Encryption/Decryption
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32); // 256-bit key
const iv = crypto.randomBytes(16); // 128-bit IV

function encrypt(text: string) {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}

function decrypt(encryptedData: string, ivHex: string) {
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), Buffer.from(ivHex, "hex"));
  let decrypted = decipher.update(Buffer.from(encryptedData, "hex"));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

const originalText = "Sensitive information";
const encryptedResult = encrypt(originalText);
console.log("Encrypted:", encryptedResult);
const decryptedText = decrypt(encryptedResult.encryptedData, encryptedResult.iv);
console.log("Decrypted:", decryptedText);