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

export default monstersRouter