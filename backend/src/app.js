import express from "express";
import multer from "multer";
import cors from "cors";
import fileUpload from "./services/imageStorage.service.js";
import postModel from "./model/post.model.js";

const app = new express();

app.use(cors());
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    const result = await fileUpload(req.file.buffer);
    const post = await postModel.create({
      imageURL: result.url,
      caption: req.body.caption,
    });
    console.log(post);
    res.status(201).json({ message: "Post creation sucessful" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Post creation failed", error: error });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const data = await postModel.find();
    res.status(200).json({ message: "Posts fetched sucessfully", data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Post fetching failed", error });
  }
});

export default app;
