import express from "express";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

// app.use("/api/posts",postRoute);
app.use("/api/auth",authRoute);


app.listen(8080, () => {
    console.log("server is running");
})