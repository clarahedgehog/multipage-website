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

export default godsRouter