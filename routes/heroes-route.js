import express from "express"
import * as path from "path"
import { greekHeroes } from "../data/data.js"

const heroesRouter = express.Router()
const __dirname = path.resolve()

heroesRouter.get("/", (req, res) => {

  res.render(
    path.join(__dirname, "views/pages/greek-page"),
    {
      pageType: "greek",
      greekList: greekHeroes
    }
  )
})

export default heroesRouter