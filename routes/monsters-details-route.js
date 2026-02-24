import express from "express"
import * as path from "path"
import { greekMonsters } from "../data/data.js"

const monstersDetailsRouter = express.Router()
const __dirname = path.resolve()

monstersDetailsRouter.get("/", (req, res) => {
  let selectedMonster = greekMonsters

  if (req.query.name) {
    selectedMonster = greekMonsters.filter(monster => monster.name === req.query.name)
  }
  res.render(
    path.join(__dirname, "views/pages/greek-details-page"),
    {
      pageType: "greek",
      greekList: selectedMonster
    }
  )
})

export default monstersDetailsRouter