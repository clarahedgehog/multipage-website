import express from "express"
import * as path from "path"
import { greekMonsters } from "../data/data.js"

const monstersRouter = express.Router()
const __dirname = path.resolve()

monstersRouter.get("/", (req, res) => {

  res.render(
    path.join(__dirname, "views/pages/greek-page"),
    {
      pageType: "greek",
      greekList: greekMonsters
    }
  )
})

monstersRouter.get("/:name", (req, res) => {
  const requestedMonster = req.params.name

  if (req.params.name) {
    const monsterDetails = greekMonsters.filter(monster => monster.name === requestedMonster)
    res.render(
      path.join(__dirname, "views/pages/greek-details-page"),
      {
        pageType: "greek",
        greekList: monsterDetails
      }
    )
  }
})

export default monstersRouter