import { ImageKit } from "@imagekit/nodejs/client.js";
import "dotenv/config";

const privateKey = process.env.IMAGEKIT_PRIVATEKEY;

const imageKit = new ImageKit({
  privateKey: privateKey,
});

const fileUpload = async (buffer) => {
  const result = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.png",
  });

  return result;
};

export default fileUpload;
