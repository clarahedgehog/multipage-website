import express from "express"
import godsRouter from "./routes/gods-route.js"
import heroesRouter from "./routes/heroes-route.js"
import monstersRouter from "./routes/monsters-route.js"
import * as path from "path"
import 'dotenv/config'

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

app.listen(port, () => console.log(`Listening on port ${port}`))