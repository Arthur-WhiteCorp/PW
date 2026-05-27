import dotenv from "dotenv";
import express from "express";
dotenv.config({ quiet: true, path: `.env` });
const app = express();
const PORT = process.env.PORT ?? 3333;
app.get("/", (req, res) => {
    res.send("Hello world !");
});
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
//# sourceMappingURL=index.js.map