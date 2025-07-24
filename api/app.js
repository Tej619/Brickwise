import express from "express";

const app = express();

app.use("/api/test", (req,res) => {
    res.send("It works");
})
console.log("test");

app.listen(8080, () => {
    console.log("server is running");
})