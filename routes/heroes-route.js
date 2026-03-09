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
  const requestedHero = req.params.name

  if (requestedHero) {
    const heroDetails = greekHeroes.filter(hero => hero.name === requestedHero)
    res.render(
      path.join(__dirname, "views/pages/greek-details-page"),
      {
        pageType: "greek",
        greekList: heroDetails
      }
    )
  }
})

export default heroesRouter