import express from "express";
import bodyParser from "body-parser";
import { getUsers, singleUser } from "./controllers/user.js";
import router from "./routes/users.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/users",router);
app.use("*",(req,res)=>{
    res.status(404).send("Page not found");
})
const port = 5000;



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
