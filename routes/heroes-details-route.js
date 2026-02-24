import express from "express"
import * as path from "path"
import { greekHeroes } from "../data/data.js"

const heroesDetailsRouter = express.Router()
const __dirname = path.resolve()

heroesDetailsRouter.get("/", (req, res) => {
  let selectedHero = greekHeroes

  if (req.query.name) {
    selectedHero = greekHeroes.filter(hero => hero.name === req.query.name)
  }
  res.render(
    path.join(__dirname, "views/pages/greek-details-page"),
    {
      pageType: "greek",
      greekList: selectedHero
    }
  )
})

export default heroesDetailsRouter