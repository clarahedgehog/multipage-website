import express from "express"
import * as path from "path"
import { greekGods } from "../data/data.js"

const godsDetailsRouter = express.Router()
const __dirname = path.resolve()

godsDetailsRouter.get("/", (req, res) => {
  let selectedGod = greekGods

  if (req.query.name) {
    selectedGod = greekGods.filter(god => god.name === req.query.name)
  }
  res.render(
    path.join(__dirname, "views/pages/greek-details-page"),
    {
      pageType: "greek",
      greekList: selectedGod
    }
  )
})

export default godsDetailsRouter