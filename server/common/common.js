import crypto from "crypto";
import jwt from "jsonwebtoken";

const encrypted = async (data) => {
  try {
    let algo = "aes256";
    let key = process.env.JWT_SECRET;

    let cipher = crypto.Cipher(algo, key);
    let encrypted = cipher.update(data, "utf8", "hex") + cipher.final("hex");
    return encrypted;
  } catch (error) {
    console.log(error);
  }
};

const decrypted = async (data) => {
  try {
    let algo = "aes256";
    let key = process.env.JWT_SECRET;

    let decipher = crypto.Decipher(algo, key);
    let decrypted =
      decipher.update(data, "hex", "utf8") + decipher.final("utf8");
    return decrypted;
  } catch (error) {
    console.log(error);
  }
};

const generateToken = async (data) => {
  try {
    let key = process.env.JWT_SECRET;
    let token = jwt.sign(data, key);
    return token;
  } catch (error) {
    console.log(error);
  }
};

export default {
  commonService: { encrypted, decrypted, generateToken },
};
