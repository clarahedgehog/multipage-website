import express from "express"
import godsRouter from "./routes/gods-route.js"
import heroesRouter from "./routes/heroes-route.js"
import monstersRouter from "./routes/monsters-route.js"
import * as path from "path"
import 'dotenv/config'
import godsDetailsRouter from "./routes/gods-details-route.js"
import heroesDetailsRouter from "./routes/heroes-details-route.js"
import monstersDetailsRouter from "./routes/monsters-details-route.js"

const app = express()
const port = process.env.PORT;

const __dirname = path.resolve()

app.use(express.static("public"))

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views/pages/index"),
    {
      pageType: "home"
    }
  )
})

app.use("/gods", godsRouter)
app.use("/heroes", heroesRouter)
app.use("/monsters", monstersRouter)
app.use("/gods/details", godsDetailsRouter)
app.use("/heroes/details", heroesDetailsRouter)
app.use("/monsters/details", monstersDetailsRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))