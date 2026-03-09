import express from "express"
import * as path from "path"
import { greekGods } from "../data/data.js"

const godsRouter = express.Router()
const __dirname = path.resolve()

godsRouter.get("/", (req, res) => {

  res.render(
    path.join(__dirname, "views/pages/greek-page"),
    {
      pageType: "greek",
      greekList: greekGods
    }
  )
})

godsRouter.get("/:name", (req, res) => {
  let requestedGod = req.params.name

  if (req.params.name) {
    requestedGod = greekGods.filter(god => god.name === req.params.name)
  }
  res.render(
    path.join(__dirname, "views/pages/greek-details-page"),
    {
      pageType: "greek",
      greekList: requestedGod
    }
  )
})

export default godsRouter