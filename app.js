import express from "express";
import { VideoController } from "./controllers/videoController";
import { UserController } from "./controllers/userController";

const app = express();
const port = 3000;

app.get("/video", VideoController);
app.get("/user", UserController);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Pristine app listening on port ${port}`);
});
