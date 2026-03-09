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

heroesRouter.get("/:name", (req, res) => {
  let requestedHero = req.params.name

  if (req.params.name) {
    requestedHero = greekHeroes.filter(hero => hero.name === req.params.name)
  }
  res.render(
    path.join(__dirname, "views/pages/greek-details-page"),
    {
      pageType: "greek",
      greekList: requestedHero
    }
  )
})

export default heroesRouter